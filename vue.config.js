module.exports={
    devServer:{
        proxy: {
            '/api': {
                target: 'http://59.111.92.205:8088',
                changeOrgin: true,
                // pathRewrite: {
                //     '^/api': ''
                //   }
            }
        }
    }
}