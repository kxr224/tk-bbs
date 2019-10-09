import http from './api'
function getSendCodes(mobile){
    
return http.get(`/api/short-message/vcode?mobile=${mobile}`)
}
export{
 getSendCodes
}