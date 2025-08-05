module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
    eol: "lf",
  },
  
  plugins: [
    "removeTitle",
    "removeXMLNS",
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeDesc",
    "removeUselessDefs",
    "removeEditorsNSData",
    "removeEmptyAttrs",
    "removeHiddenElems",
    "removeEmptyText",
    "removeEmptyContainers",
    "cleanupAttrs",
    "cleanupEnableBackground",
    "convertStyleToAttrs",
    "convertColors",
    "convertPathData",
    "convertTransform",
    "convertShapeToPath",
    "cleanupNumericValues",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
   //  "collapseGroups",
    "mergePaths",
    "removeDimensions",
    
    {
       name: "preset-default",
    },
    
    {
      name: "removeAttrs",
      params: {
        attrs: ["xmlns:xlink", "xml:space", "id", "class", "data-name", "version"],
      },
    },
    
    {
      name: "forceFileAttrs",
      fn: (ast) => {
        const { children } = ast;
        if (children?.[0]?.type === "element" && children[0]?.name === "svg") {
          const svg = children[0];
          
          svg.attributes = {
            ...svg.attributes,
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          };
        }
        return ast;
      },
    },
  ],
};
