// App updates and changelog
// Add your latest updates here in reverse chronological order (newest first)

export const updates = [
  {
    version: "02.29",
    changes: [
      "Fixed bug with editor window loading on section zoom"
    ]
  },
  {
    version: "02.25",
    changes: [
      "Basic Find & Replace has been added"
    ]
  },
  {
    version: "02.19",
    changes: [
      "Word-count improvements, as well as the addition of word count goals and status markers"
    ]
  },
  {
    version: "02.17",
    changes: [
      "Improved zoom mode: Option-double-click zooms to a single section, regular double-click shows section and sub-sections",
      "Improved focus mode: full screen, hide side bars, hide header and footer, collapse annotations, and remember state on restart or exit"
    ]
  },
  {
    version: "02.15",
    changes: [
      "Complete redesign of backend architecture to better support block-based outlining features",
      "Cleaned up source-mode so it matches look and theme of WYSIWYG editor",
      "Improved bibliography generation to make it more robust in various edge cases"
    ]
  },
  {
    version: "0.2.9",
    changes: [
      "Preference pane now lets you override default themes and save your own styles",
      "Improved Zotero workflow now uses native citation picker and lets you add multiple sources to the same in-text citation",
      "Improved bibliography sync to better match the text"
    ]
  }
];

// Optional: Link to full changelog page
export const changelogUrl = "#";
