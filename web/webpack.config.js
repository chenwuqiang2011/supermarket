var path = require('path');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: './src/app.js',//唯一的入口文件
    output: {
        path: path.resolve(__dirname, './dist'),//打包的 js 存放目录，也就是 npm build(webpack) 会生成一个 js 文件
        publicPath: '/dist/', //npm start 虚拟路径
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: '/node_modules/',
            loader: 'style-loader!css-loader?sourceMap'          
        },{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },{
            test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
            exclude: '/node_modules/', //屏蔽不需要处理的文件（文件夹）（可选）
            use: ['babel-loader']
        },{ 
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        },{
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    query: {
                        name:'static/[name].[ext]'
                    }
                }
            },{
                loader: 'image-webpack-loader',
                options: {
                    query: {
                        mozjpeg: {
                            progressive: true,
                        },
                        gifsicle: {
                            interlaced: true,
                        },
                        optipng: {
                            optimizationLevel: 7,
                        }
                    }
                }
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })    
    ],
    devServer: {
        stats: 'errors-only'
    }	
}
