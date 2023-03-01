const css_regex = "/\\.css$/";

const postcssModules = {
webpackFinal(config: { module: { rules: any[]; }; }, options: any) {
  const cssRule = config.module.rules.find(
    (_: { test: { toString: () => string; }; }) => _ && _.test && _.test.toString() === css_regex
  );

  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules.filter(
          (_: { test: { toString: () => string; }; }) => _ && _.test && _.test.toString() !== css_regex
        ),
        {
          ...cssRule,
          exclude: /\.module\.css$/,
        },
        {
          ...cssRule,
          test: /\.module\.css$/,
          use: cssRule.use.map((_: { loader: string; options: any; }) => {
            if (_ && _.loader && _.loader.match(/[\/\\]css-loader/g)) {
              return {
                ..._,
                options: {
                  ..._.options,
                  modules: {
                    localIdentName: "[name]__[local]__[hash:base64:5]",
                  },
                },
              };
            }

            return _;
          }),
        },
      ],
    },
  };
 }
}

 export default postcssModules