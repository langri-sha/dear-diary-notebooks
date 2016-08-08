const cssnext = require('postcss-cssnext')
const importer = require('postcss-import')
const reporter = require('postcss-reporter')
const stylelint = require('stylelint')

const stylelintConfiguration = {
  extends: 'stylelint-config-standard',
  rules: []
}

// A callable that provides the PostCSS configuration.
module.exports = (webpack) => ([
  stylelint(stylelintConfiguration),
  importer({
    addToDependency: webpack,
    plugins: [
      stylelint(stylelintConfiguration)
    ]
  }),
  cssnext(),
  reporter()
])
