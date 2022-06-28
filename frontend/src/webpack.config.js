const cssRegex = /\.css|less$/;

const loaders = [
    {
        loader:'less-loader',
        options:{
            javascriptEnabled:true
        },
        resolve: {
            extensions: ['.js', '.jsx', '.less']
        },
    }
]
