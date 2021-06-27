const csv = require("csv");
const fs = require("fs");
const path = require("path");

function csv2json(filePath) {
  const fileName = path.basename(filePath);
  const dir = path.dirname(filePath);
  console.log(filePath);
  console.log(fileName);
  console.log(dir);
  const records = [];
  const parser = fs.createReadStream(filePath).pipe(csv.parse());
  parser.on("readable", () => {
    let r;
    while ((r = parser.read())) {
      records.push({
        id: r[0],
        word: r[1],
        frequency: r[2],
      });
    }
    fs.writeFileSync(
      path.join(dir, `${fileName}.json`),
      JSON.stringify(records)
    );
  });
}

csv2json("C:\\Users\\buuug7\\code\\common-chinese-character\\common-used-words.csv");
