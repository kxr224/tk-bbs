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
//获取评论文本的
function getCommentContent(postsId){
    let formdate = new FormData()
    formdate.append('postsId',postsId)
    formdate.append('rememberMe',true)
    return http.post('/api/bbs/bbsComment/open/list',formdate)
}
//发送评论
function sendComment(postsId,commentContent){
    let formdate = new FormData()
    formdate.append('postsId',postsId)
    formdate.append('commentContent',commentContent)
    formdate.append('rememberMe',true)
    return http.post('/api/bbs/bbsComment/site/add',formdate)
}
//发送评论的回复
function sendRbComment(postsId,parentId,commentContent){
    let formdate = new FormData()
    formdate.append('postsId',postsId)
    formdate.append('parentId',parentId)
    formdate.append('commentContent',commentContent)
    formdate.append('rememberMe',true)
    return http.post('/api/bbs/bbsComment/site/reply/add',formdate)
}
function getRbCommentList(parentId){
    let formdate = new FormData()
    formdate.append('parentId',parentId)
    formdate.append('rememberMe',true)
    return http.post('/api/bbs/bbsComment/open/reply/list',formdate)
}
//删除评论接口
function deleteComment(ids){
    let formdate = new FormData()
    formdate.append('ids',ids)
    formdate.append('rememberMe',true)
    return http.post('/api/bbs/bbsComment/site/remove',formdate)
}
export {getTopics,publish,iJoin,getRecomList,
    getTheme,getThemeArtList,getSearchRes,
    getCommentContent,sendComment,sendRbComment,getRbCommentList,
    deleteComment
}