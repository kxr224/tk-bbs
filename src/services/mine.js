import http from './api'


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

function getPerson() {
    return http.get('/api/login-user/info')
        .then(res => {
            return res.data
        })
}
function getSendCodes(mobile) {

    return http.get(`/api/short-message/vcode/${mobile}`)
    // let formdata = new FormData();
    // formdata.append("username","kxr224")
    // formdata.append("password","111111")
    // formdata.append("rememberMe",true)
    // http.post("/api/login",formdata)
}
function registe(loginName,password,userName,phonenumber,code){
    // return http.post('/api/registry',{
    //     loginName:`${loginName}`,
    //     password:`${password}`,
    //     userName:`${userName}`,
    //     phonenumber:`${phonenumber}`,
    //     code:`${code}`,
    // })
    let formdata=new FormData()
    formdata.append('loginName',`${loginName}`)
    formdata.append('password',`${password}`)
    formdata.append('userName',`${userName}`)
    formdata.append('phonenumber',`${phonenumber}`)
    formdata.append('code',`${code}`)
    formdata.append("rememberMe",true)
    http.post('/api/registry',formdata)
}
function findPassword(loginName,password,phonenumber,code){
    let formdata = new FormData()
    formdata.append('loginName',loginName)
    formdata.append('password',password)
    formdata.append('phonenumber',phonenumber)
    formdata.append('code',code)
    formdata.append("rememberMe",true)
   return http.post('/api/password/forget',formdata)
}
export{
    getSendCodes,
    login,
    changeHead,
    getPerson,
    registe,
    findPassword,
}