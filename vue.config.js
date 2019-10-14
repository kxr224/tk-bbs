module.exports={
    devServer:{
        proxy: {
            '/api': {
                target: 'http://192.168.1.173:8088',
                // target: 'http://59.111.92.205:8088',
                changeOrgin: true,
                // pathRewrite: {
                //     '^/api': ''
                //   }
            }
        }
    }
}