const markdownpdf = require('markdown-pdf');

markdownpdf()
    .from("read1.md")
    .to("markdown.pdf", function() {
        console.log("Done");
    });