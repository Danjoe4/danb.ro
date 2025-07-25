module.exports = function (eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  // Set input and output directories
  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
