module.exports={
    context: __dirname + "/static/lib",
    entry: "./app.jsx",
    output: {
        path: __dirname + "/static/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [

            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};