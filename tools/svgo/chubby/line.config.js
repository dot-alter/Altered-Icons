module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
    eol: "lf",
  },
  plugins: [{
    name: "preset-default"
  },
    "removeDoctype",
    "removeXMLNS",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeDesc",
    "removeTitle",
    "removeUselessDefs",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "removeEmptyText",
    "removeEditorsNSData",
    "removeHiddenElems",
    "cleanupAttrs",
    "cleanupEnableBackground",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "removeDimensions",
    "convertStyleToAttrs",
    "convertColors",
    "convertPathData",
    "convertTransform",
    "convertShapeToPath",
    "cleanupNumericValues",
    "collapseGroups",
    "mergePaths",

    {
      name: "removeAttrs",
      params: {
        attrs: [
          "xmlns:xlink",
          "xml:space",
          "id",
          "class",
          "data-name",
          "version"
        ],
      },
    },
    {
      name: "forceFileAttrs",
      fn: (ast) => {
        const {
          children
        } = ast;
        if (children?.[0]?.type === "element" && children[0]?.name === "svg") {
          const svg = children[0];
          svg.attributes = {
            ...svg.attributes,
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "1.5"
          };
        }
        return ast;
      },
    },
  ],
};