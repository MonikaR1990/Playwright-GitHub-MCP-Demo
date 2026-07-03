const fs = require("fs");
const pdf = require("pdf-parse");

async function readPDF() {
    try {
        const dataBuffer = fs.readFileSync("HRPolicy_Practice.pdf");

        const data = await pdf(dataBuffer);

        console.log("========== PDF CONTENT ==========\n");

        console.log(data.text);

        console.log("\n========== END ==========");
    }
    catch (err) {
        console.log(err);
    }
}

readPDF();