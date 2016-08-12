import cssnext from 'postcss-cssnext'
import importer from 'postcss-import'
import reporter from 'postcss-reporter'

const stylelint = () => (
  require('stylelint')({
    extends: 'stylelint-config-standard',
    rules: []
  })
)

const postcss = (webpack) => ([
  importer({
    addToDependency: webpack,
    plugins: []
  }),
  cssnext(),
  reporter()
])

const debug = (webpack) => ([
  stylelint(),
  importer({
    addToDependency: webpack,
    plugins: [
      stylelint()
    ]
  }),
  cssnext(),
  reporter()
])

// A callable that provides the PostCSS configuration.
export default (webpack) => (
  webpack.debug && postcss(webpack) || debug(webpack)
)
