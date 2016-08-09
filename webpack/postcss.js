import cssnext from 'postcss-cssnext'
import importer from 'postcss-import'
import reporter from 'postcss-reporter'
import stylelint from 'stylelint'

const stylelintConfiguration = {
  extends: 'stylelint-config-standard',
  rules: []
}

// A callable that provides the PostCSS configuration.
export default (webpack) => ([
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
