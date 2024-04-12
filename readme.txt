SurVis

To start SurVis, open 'www/index.html' in your browser.

All bibliography data is stored in 'data/'. For changing the bibliography, please edit 
the following files:

* 'example.bib': bibliography in BibTeX format
* 'tag_categories.js' (optional): list of special tag categories; they can be used as a prefix
     for the tags and appear, for instance, 'a:b' refers to tag 'b' in tag category 'a'
* 'authorized_tags.js' (optional): tags that are defined through a description (highlighted 
     in SurVis, description appears as a tooltip)
* 'papers_pdf' (optional): PDF files of the papers, please use the BibTeX id as a file name
* 'papers_img'(optional): PNG thumbnails for the papers, please use the BibTeX id as a file
     name

Please do not edit the files in 'data/generated/' because they are created automatically. 

After completing your changes, just run 'src/update_data.py' with Python 3. Reload SurVis in 
the browser to see the changed bibliography. The script will continue to check for updates 
on the bib file until you stop it.

If you want to use a different bib file as your data base, just edit the path in 
'src/update_data.py'.

BibTeX entries can be modified in the browser, but are not stored in the data directory. 
To make those changes persistent, use 'download BibTex' in SurVis and copy the BibTeX data to
your bib file in the data directory. Be careful: reloading the page resets your temporary 
changes.

Further properties of SurVis, such as the title of the page, can be modified in the 
file 'www/properties.js'.