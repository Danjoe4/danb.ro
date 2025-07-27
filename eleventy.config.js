import markdownIt from "markdown-it";
import fs from "fs";
import path from "path";
import esbuild from "./_source/_utilities/esbuild.js";
import lightingcss from "./_source/_utilities/lightningcss.js";
import image from "./_source/_utilities/image.js";
import style from "./_source/_utilities/style.js";
import setVar from "./_source/_utilities/setVar.js";
import fullDate from "./_source/_utilities/fullDate.js";
import markdownify from "./_source/_utilities/markdownify.js";
import { IdAttributePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  /* --------------------------------------------------------------------------
  Plugins, bundles, shortcodes, filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addPlugin(esbuild);
  eleventyConfig.addPlugin(lightingcss);
  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.addBundle("css", { transforms: [style] });
  eleventyConfig.addShortcode("image", image);
  eleventyConfig.addPairedShortcode("setVar", setVar);
  eleventyConfig.addFilter("fullDate", fullDate);
  eleventyConfig.addFilter("markdownify", markdownify);

  // Custom filter to read and process CONTENT.md
  eleventyConfig.addFilter("loadContentFilter", function (filename) {
    try {
      const contentPath = path.join(process.cwd(), "_source", filename);
      const content = fs.readFileSync(contentPath, "utf8");
      // Remove front matter if it exists
      const contentWithoutFrontMatter = content.replace(
        /^---[\s\S]*?---\n/,
        ""
      );
      return contentWithoutFrontMatter;
    } catch (error) {
      console.error("Error reading content file:", error);
      return "Error loading content";
    }
  });

  // Extract headers from markdown content for navigation
  eleventyConfig.addFilter("extractHeaders", function (content) {
    const headerRegex = /^(#{1,6})\s+(.+)$/gm;
    const headers = [];
    let match;

    while ((match = headerRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

      headers.push({
        level: level,
        title: title,
        slug: slug,
      });
    }

    return headers;
  });

  // Build hierarchical tree structure from flat headers array
  eleventyConfig.addFilter("buildHeaderTree", function (headers) {
    if (!headers || headers.length === 0) return [];

    const tree = [];
    const stack = [];

    headers.forEach((header) => {
      const item = {
        ...header,
        children: [],
      };

      // Find the correct parent level
      while (
        stack.length > 0 &&
        stack[stack.length - 1].level >= header.level
      ) {
        stack.pop();
      }

      if (stack.length === 0) {
        // Top level item
        tree.push(item);
      } else {
        // Child item
        stack[stack.length - 1].children.push(item);
      }

      stack.push(item);
    });

    return tree;
  });

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  const markdownItOptions = {
    html: true,
    typographer: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

  /* --------------------------------------------------------------------------
  Files & folders
  -------------------------------------------------------------------------- */
  eleventyConfig.ignores.add(".DS_Store");
  eleventyConfig.ignores.add("_source/CONTENT.md");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("_source/assets/fonts");
  eleventyConfig.addPassthroughCopy("_source/assets/images");

  return {
    dir: {
      input: "_source",
      output: "_public",
      layouts: "_layouts",
      includes: "_includes",
    },
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",
  };
}
