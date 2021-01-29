import path from "path";
import fs from "fs";
import os from "os";
import { createPackage } from "./createPackage";
import { bundle } from "./bundle";

async function main() {
  const tmpDir = path.join(os.tmpdir(), "fluentui-mf");

  console.log(`Working directory: ${tmpDir}`);

  if (fs.existsSync(tmpDir)) {
    fs.rmdirSync(tmpDir, { recursive: true });
  }
  fs.mkdirSync(tmpDir);

  createPackage(tmpDir);

  bundle(tmpDir);
}

main();
