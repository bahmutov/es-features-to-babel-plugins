// ES feature names from https://github.com/getify/es-feature-tests
// List of Babel plugins https://babeljs.io/docs/plugins/
var INCLUDE_BABEL_POLYFILL = 'INCLUDE_BABEL_POLYFILL'

var babelMapping = {
  arrow: 'transform-es2015-arrow-functions',
  conciseMethodProperty: 'transform-es2015-shorthand-properties',
  defaultParameter: 'transform-es2015-parameters',
  destructuring: 'transform-es2015-destructuring',
  letConst: 'transform-es2015-block-scoping',
  numericLiteral: 'transform-es2015-literals',
  parameterDestructuring: ['transform-es2015-parameters', 'transform-es2015-destructuring'],
  spreadRest: 'transform-es2015-spread',
  templateString: 'transform-es2015-template-literals',
  INCLUDE_BABEL_POLYFILL: INCLUDE_BABEL_POLYFILL
};

['StringMethods', 'ArrayMethods'].forEach(function (feature) {
  babelMapping[feature] = INCLUDE_BABEL_POLYFILL
})

module.exports = babelMapping
