/**
 * SVGO Default Configuration
 * -------------------------------------------------
 * Safe, non-destructive baseline optimization.
 * Intended for:
 * - Any style or variant
 * - Experimental icons
 * - Fallback when no style-specific config exists
 *
 * Guarantees:
 * - 2-space indentation
 * - Preserved line breaks
 * - UTF-8 encoding
 * - No visual or structural breakage
 */
 
module.exports = {
  multipass: false,
  
  js2svg: {
    indent: 2,
    pretty: true
  },
  
  plugins: [
    /*
     * Core safety plugins
     */
    'cleanupAttrs',
    'cleanupEnableBackground',
    'cleanupIds',

    /*
     * Metadata & comments
     */
    {
      name: 'removeComments',
      active: false
    },
    {
      name: 'removeMetadata',
      active: false
    },
    {
      name: 'removeTitle',
      active: false
    },
    {
      name: 'removeDesc',
      active: false
    },
    
    /*
     * Structural integrity
     */
    {
      name: 'removeViewBox',
      active: false
    },
    {
      name: 'collapseGroups',
      active: false
    },
    {
      name: 'convertTransform',
      active: false
    },
    
    /*
     * Geometry safety
     */
    {
      name: 'convertShapeToPath',
      active: false
    },
    {
      name: 'mergePaths',
      active: false
    },
    {
      name: 'convertPathData',
      active: false
    },
    
    /*
     * Styling & color safety
     */
    {
      name: 'convertColors',
      active: false
    },
    {
      name: 'removeUnknownsAndDefaults',
      active: false
    },
    {
      name: 'removeUselessStrokeAndFill',
      active: false
    },
    
    /*
     * Cleanups that are safe
     */
    'removeDoctype',
    'removeXMLProcInst',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers'
  ]
};
