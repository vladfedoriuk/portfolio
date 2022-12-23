// https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
// https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    emotionAlias: false,
  },
  webpackFinal: async (config) => {
    const imageRule = config.module.rules.find((rule) =>
      rule.test.test(".svg")
    );
    imageRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  docs: {
    docsPage: "automatic",
  },
};
