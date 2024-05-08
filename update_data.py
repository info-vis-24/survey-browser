import codecs
import json
import os
import time

from dateutil.parser import isoparse

BASE_DIR = os.path.dirname(__file__)

DATA_DIR = os.path.join(BASE_DIR, "docs/data/")
PAPERS_DIR = os.path.join(DATA_DIR, "papers_pdf/")
PAPERS_IMG_DIR = os.path.join(DATA_DIR, "papers_img/")

BIB_FILE = os.path.join(BASE_DIR, "bib/references.bib")

GENERATED_DIR = os.path.join(DATA_DIR, "generated/")
BIB_JS_FILE = os.path.join(GENERATED_DIR, "bib.js")
AVAILABLE_PDF_FILE = os.path.join(GENERATED_DIR, "available_pdf.js")
AVAILABLE_IMG_FILE = os.path.join(GENERATED_DIR, "available_img.js")


def parseBibtex(bibFile):
    parsedData = {}
    lastField = ""
    with codecs.open(bibFile, "r", "utf-8-sig") as fIn:
        currentId = ""
        for line in fIn:
            line = line.strip("\n").strip("\r")
            if line.lower().startswith("@comment "):
                continue
            if line.startswith("@"):
                currentId = line.split("{")[1].rstrip(",\n")
                currentType = line.split("{")[0].strip("@ ")
                parsedData[currentId] = {"type": currentType}
            if currentId != "":
                if "=" in line:
                    field = line.split("=")[0].strip().lower()
                    value = line.split("=")[1].strip('"} \n')
                    if value.endswith("},") or value.endswith('",'):
                        value = value[:-2]
                    if len(value) > 0 and (value[0] == "{" or value[0] == '"'):
                        value = value[1:]
                    if field in parsedData[currentId]:
                        parsedData[currentId][field] = (
                            parsedData[currentId][field] + " " + value
                        )
                    else:
                        parsedData[currentId][field] = value
                    lastField = field
                else:
                    if lastField in parsedData[currentId]:
                        value = line.strip()
                        value = value.strip("} \n").replace("},", "").strip()
                        if len(value) > 0:
                            parsedData[currentId][lastField] = (
                                parsedData[currentId][field] + " " + value
                            )
        fIn.close()
    return parsedData


def middleware(parsedData):
    for entry in parsedData.values():
        if "date" in entry and not "year" in entry:
            try:
                date = isoparse(entry["date"])
                entry["year"] = str(date.year)
            except:
                raise Exception(f"Invalid date {entry['date']}")
    return parsedData


def writeJSON(parsedData):
    with codecs.open(BIB_JS_FILE, "w", "utf-8-sig") as fOut:
        fOut.write("define({ entries : ")
        fOut.write(
            json.dumps(parsedData, sort_keys=True, indent=4, separators=(",", ": "))
        )
        fOut.write("});")
        fOut.close()


def listAvailablePdf():
    # papersDirWin = papersDir.replace("/", "\\")
    fOut = open(AVAILABLE_PDF_FILE, "w")
    s = "define({availablePdf: ["
    count = 0
    for file in os.listdir(PAPERS_DIR):
        if file.endswith(".pdf"):
            s += '"' + file.replace(".pdf", "") + '",'
            count += 1
    if count > 0:
        s = s[: len(s) - 1]
    s += "]});"
    fOut.write(s)


def listAvailableImg():
    fOut = open(AVAILABLE_IMG_FILE, "w")
    s = "define({ availableImg: ["
    count = 0
    for file in os.listdir(PAPERS_IMG_DIR):
        if file.endswith(".png"):
            s += '"' + file.replace(".png", "") + '",'
            count += 1
    if count > 0:
        s = s[: len(s) - 1]
    s += "]});"
    fOut.write(s)


def update():
    print("convert bib file")
    parsedData = parseBibtex(BIB_FILE)
    processedData = middleware(parsedData)
    writeJSON(processedData)
    print("list available paper PDF files")
    listAvailablePdf()
    print("list available paper images")
    listAvailableImg()
    print("done")


def generate_folders():
    for d in [GENERATED_DIR, PAPERS_DIR, PAPERS_IMG_DIR]:
        try:
            os.makedirs(d)
        except FileExistsError:
            pass


if __name__ == "__main__":
    generate_folders()

    prevBibTime = 0
    while True:
        currentBibTime = os.stat(BIB_FILE).st_mtime
        if prevBibTime != currentBibTime:
            print("detected change in bib file")
            update()
            prevBibTime = currentBibTime
        else:
            print("waiting for changes in bib file: " + BIB_FILE)
        time.sleep(1)
