import { mkdir, readdir } from "node:fs/promises";
import { basename, extname } from "node:path";
import sharp from "sharp";

const output = new URL("../public/generated/", import.meta.url);
await mkdir(output, { recursive: true });

for (const folder of ["projects", "gallery"]) {
  const source = new URL(`../public/${folder}/`, import.meta.url);
  for (const file of await readdir(source)) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    for (const width of [480, 960, 1600, 3200]) {
      await sharp(new URL(file, source).pathname)
        .resize({ width })
        .webp({ quality: 85 })
        .toFile(
          new URL(`${basename(file, extname(file))}-${width}.webp`, output)
            .pathname,
        );
    }
  }
}
console.log("Project and gallery images generated.");
