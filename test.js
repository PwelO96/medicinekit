import crypto from "crypto";
import fs from "fs";

const fileBuffer = fs.readFileSync("./page.json");
const hashSum = crypto.createHash("md5");
hashSum.update(fileBuffer);

const md5Hash = hashSum.digest("hex");
console.log(md5Hash);
