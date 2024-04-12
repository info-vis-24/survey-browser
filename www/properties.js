/**
 * Name as used as title for the main page
 * @type {string}
 */
title = 'SetViz.net';

/**
 * Relative path to the data directory
 * @type {string}
 */
dataDir = '../data/';

/**
 * Min number of occurrences for a tag to be displayed in the tag cloud (show all tags: 0)
 * @type {number}
 */
minTagFrequency = 0;

/**
 * If BibTeX entries (and tags) should be editable
 * @type {boolean}
 */
editable = false;

/**
 * Subtitle describing the paper the data is referring to (set to null to deactivate)
 * @type {{html: string, id: string}}
 */
paper = {
    html: 'Digital library for the survey <b> <a \href="http://publik.tuwien.ac.at/files/PubDat_228538.pdf">Visualizing Sets and Set-typed Data: State-of-the-Art and Future Challenges </a></b>',
    id: null // id of the paper (adds a button to select the paper)
};

/**
 * Path to the about page (keep empty if there is no about page)
 * @type {string}
 */
about = '';

/**
 * Custom style as path to an extra css file (leave empty if not applicable)
 * @type {string}
 */
customStyle = '';