module.exports = function(eleventyConfig) {
  // This tells Eleventy to copy your style.css to the final site folder
  eleventyConfig.addPassthroughCopy("style.css");
};