'use strict'

hexo.extend.generator.register('manifest',()=>{
    return{
        path: hexo.theme.config.pwa.path,
        data: JSON.stringify(hexo.theme.config.pwa.body)
    }
})

hexo.extend.generator.register('CNAME',()=>{
    return{path: "/CNAME",
    data: hexo.theme.config.CNAME
    }
})