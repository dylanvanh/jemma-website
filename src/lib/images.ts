export function getImageSources(src: string) {
  if (!/^\/(projects|gallery)\//.test(src) || !/\.(jpe?g|png)$/i.test(src))
    return undefined;
  const name = src
    .replace(/^\/(projects|gallery)\//, "")
    .replace(/\.[^.]+$/, "");
  return [480, 960, 1600, 3200]
    .map((width) => `/generated/${name}-${width}.webp ${width}w`)
    .join(", ");
}
