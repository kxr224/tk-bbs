import http from './api'
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
export {
    getSendCodes,
    registe
}