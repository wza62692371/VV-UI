module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "esmodules": true
                }
            }
        ]
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        [
            "import",
            {
                "libraryName": "cliss-ui-test",
                "style": (name, file) => {
                    console.log('name=>> ', name);
                    return `cliss-ui-test/lib/theme-default/${name.split('/')[2]}.css`
                }
            }
        ]
    ]
}