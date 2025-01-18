export const config = {
  markdownTemplateEngine: "njk",
};

export default async function(eleventyConfig) {
  eleventyConfig.setIncludesDirectory("_layouts");

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
