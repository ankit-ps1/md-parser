const express = require('express')
const {mdToPdf} = require('md-to-pdf')
var markdownpdf = require("markdown-pdf")
const app = express()
const port = 6699

app.use(express.urlencoded({
    extended: true
}))

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

app.post('/submit', async(req, res) => {
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    console.log(req.body.md_data);
    const md_string = req.body.md_data;
    var md = req.body.md_data
    var outputPath = "./doc.pdf"

    const pdf = await mdToPdf({content : md_string, language: 'javascript'}).catch(console.error);

    markdownpdf().from.string(md).to(outputPath, function () {
  console.log("Created", outputPath)
})

    if(pdf) {
        console.log(pdf.content)
        res.header('Content-type', 'application/pdf')
        res.send(pdf.content)
        return
    }
    else {
        res.send("bad md code. Aborting...")
        return
    }
})

var server = app.listen(port, () => {
    console.log('Node app listening on port ${port}')
})

server.setTimeout(5000);

