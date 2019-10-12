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
//获取主题列表
function getTheme(pageNum,pageSize){
    let formdate = new FormData()
    formdate.append('pageNum',pageNum)
    formdate.append('pageSize',pageSize)
    return http.post("/api/bbs/bbsCategory/open/list",formdate)
}
//点击主题获取响应帖子列表
function getThemeArtList(categoryId){
    let formdate=new FormData()
    formdate.append("categoryId",categoryId)
    return http.post("/api/bbs/bbsPosts/open/list",formdate)
}
//获取搜索结果
function getSearchRes(title){
    let formdate=new FormData()
    formdate.append("title",title)
    return http.post("/api/bbs/bbsPosts/open/list",formdate)
}

export {getTopics,publish,iJoin,getRecomList,
    getTheme,getThemeArtList,getSearchRes}