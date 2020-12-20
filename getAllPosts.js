// https://www.smashingmagazine.com/2020/09/build-blog-nextjs-mdx/

function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx?$/, ""),
    module: r(fileName),
  }));
}

export const posts = importAll(
  require.context("./pages/blog/", true, /\.mdx?$/)
).sort(
  (p1, p2) => new Date(p2.module.meta.date) - new Date(p1.module.meta.date)
);
