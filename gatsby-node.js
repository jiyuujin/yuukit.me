const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, `src`), `node_modules`]
        }
    })
    actions.setBabelPlugin({
        name: '@babel/plugin-transform-react-jsx',
        options: {
            runtime: 'automatic',
        },
    })
}
