export const config = {
  markdownTemplateEngine: "njk",
};

export default async function(eleventyConfig) {
  eleventyConfig.setIncludesDirectory("_layouts");

  let types = ["csv", "css", "js", "jpg", "png", "json", "svg"];
  let pathPairs = [
    ["collections/_visualizations/Trends-in-High-School-GPAs-of-Incoming-Freshman",
      "visualizations/Trends-in-High-School-GPAs-of-Incoming-Freshman"],
    //["covid-19", "covid-19"],
    //["discovery", "discovery"],
  ]

  for (let pathPair of pathPairs) {
    for (let type of types) {
      let key = `${pathPair[0]}/**/*.${type}`;
      let value = `${pathPair[1]}/`;

      let d = {};
      d[key] = value;
      // console.log(d);

      eleventyConfig.addPassthroughCopy(d);
    }
  }
  
  eleventyConfig.setTemplateFormats(["csv", "css", "js", "jpg", "png", "json", "md", "html"]);


  eleventyConfig.addPairedShortcode("card", (body, cardTitle) => {
    console.log(body);
    return `<div class="card box-shadow px-2 mb-3">
        <div class="card-body">
          <h4 class="card-title">${cardTitle}</h4><p>${body}</p>
        </div>
      </div>`;
  }

  )
};
