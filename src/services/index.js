import http from './api'
function getTopics(){

   return  http.post('/api/bbs/bbsCategory/open/list')
}
function publish(categoryId,title,intro,coverImgUrl){
    let formdate = new FormData()
    formdate.append('categoryId',categoryId)
    formdate.append('title',title)
    formdate.append('intro',intro)
    formdate.append('coverImgUrl',coverImgUrl)
    formdate.append('rememberMe',true)
    return http.post('/api/bbs/bbsPosts/site/add',formdate)
}
function iJoin(){
    return http.post('/api/bbs/bbsPosts/join/list')
}
function getRecomList(){
    return http.post("/api/bbs/bbsPosts/open/list")


}

function getTheme(){
    return http.post("/api/bbs/bbsCategory/open/list")
}
export {getTopics,publish,iJoin,getRecomList,
    getTheme}