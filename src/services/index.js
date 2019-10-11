import http from './api'

function getRecomList(){
   return http.post("/api/bbs/bbsPosts/open/list")
      
   
}

function getTheme(){
    return http.post("/api/bbs/bbsCategory/open/list")
}


export{
    getRecomList,
    getTheme
}