//rem兼容不同分辨率
const px2rem = require('postcss-px2rem');
const postcss = px2rem({
    remUnit: 32   //基准大小 baseSize
});

module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './static',//打包时需要更改路径'./static'
    css: {//rem兼容不同分辨率
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    }
};
