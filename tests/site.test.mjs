import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";

const origin = process.env.SITE_TEST_URL || "http://127.0.0.1:3001";
const get = (path) =>
  fetch(new URL(path, origin), { signal: AbortSignal.timeout(10_000) });

test("the Worker serves the approved portfolio, email link, CSS and images", async () => {
  const response = await get("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Interior Designer/);
  assert.match(html, /id="hero-title"/);
  assert.match(html, /mailto:jemmawedgwood01@gmail.com/);
  assert.doesNotMatch(html, /<form[ >]|api\/contact-form|_next\//);
  assert.match(html, /fetchPriority="high"|fetchpriority="high"/);
  const css = html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/);
  assert.ok(css, "SSR must include the stylesheet");
  const asset = await get(css[1]);
  assert.equal(asset.status, 200);
  assert.match(asset.headers.get("content-type"), /text\/css/);
  for (const path of [
    "/generated/brew-pub-480.webp",
    "/generated/brew-pub-960.webp",
    "/generated/brew-pub-1600.webp",
    "/favicon.ico",
  ]) {
    assert.equal((await get(path)).status, 200, path);
  }
});

test("all project routes have server-rendered titles and unknown routes return 404", async () => {
  for (const [id, title] of [
    ["1", "PG Bison"],
    ["2", "Skin Clinic"],
    ["3", "Renovation"],
    ["4", "Brew Pub"],
    ["5", "Booking.com office"],
  ]) {
    const response = await get(`/projects/${id}`);
    assert.equal(response.status, 200);
    assert.ok(
      (await response.text()).includes(
        `<title>${title} - Project Gallery | Jemma Wedgwood</title>`,
      ),
    );
  }
  for (const path of [
    "/projects/missing",
    "/missing-page",
    "/api/contact-form",
  ]) {
    const response = await get(path);
    assert.equal(response.status, 404, path);
    assert.match(await response.text(), /This page has moved out/);
  }
});

test("crawler routes and the opportunities noindex policy survive the migration", async () => {
  const sitemap = await get("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  assert.match(sitemap.headers.get("content-type"), /application\/xml/);
  const xml = await sitemap.text();
  assert.equal((xml.match(/<loc>/g) || []).length, 6);
  assert.doesNotMatch(xml, /undefined|opportunities/);
  const robots = await get("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https?:\/\/[^\s]+\/sitemap\.xml/);
  const opportunities = await get("/opportunities");
  assert.equal(opportunities.status, 200);
  assert.equal(opportunities.headers.get("x-robots-tag"), "noindex, nofollow");
  assert.match(
    await opportunities.text(),
    /name="robots" content="noindex, nofollow"/,
  );
});

test("every gallery image is served locally with a responsive variant", async () => {
  const config = await readFile(
    new URL("../src/config/project-config.ts", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(config, /https:\/\/i\.imgur\.com/);
  const images = [
    ...new Set(
      [...config.matchAll(/"(\/gallery\/[^" ]+)"/g)].map((match) => match[1]),
    ),
  ];
  assert.ok(images.length > 0);
  for (const image of images) {
    const name = image
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "");
    for (const path of [image, `/generated/${name}-960.webp`]) {
      const response = await fetch(new URL(path, origin), {
        method: "HEAD",
        signal: AbortSignal.timeout(10_000),
      });
      assert.equal(response.status, 200, path);
      assert.match(response.headers.get("content-type"), /^image\//, path);
    }
  }
});
