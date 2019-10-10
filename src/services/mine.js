import http from './api'
function getSendCodes(mobile){
    
return http.get(`/api/short-message/vcode/${mobile}`)
}

function login(username,password){
    let formdate=new FormData()
     formdate.append("username",`${username}`)
     formdate.append("password",`${password}`)
     formdate.append("rememberMe",true)
    return  http.post('/api/login',formdate)
     
}

function changeHead(avatarfile){
    let formdate=new FormData()
    formdate.append('avatarfile',`${avatarfile}`)
     return http.post('/api/system/user/profile/update/avatar/nos',formdate)
}

function getPerson(){
    return http.get('/api/login-user/info')
    .then(res=>{
        return res.data
    })

}
export{
 getSendCodes,
 login,
 changeHead,
 getPerson
}