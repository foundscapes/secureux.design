const isProd = process.env.NODE_ENV === "production";
const prefix = "/secureux.design";
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  basePath: "",
  assetPrefix: "",
  pageExtensions: ["ts", "tsx", "mdx"],
});
