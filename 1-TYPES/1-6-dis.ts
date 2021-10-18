{
    //예제 로그인(성공,실패)
    type successState = {
        result:"success",
        res: {
            body:string
        }
    }
    type failState = {
        result:"fail",
        reason: string
    }
    type loginState = successState | failState;
    function login(id:string, pw: string):loginState{
        return {
            result:"success",
            res:{
                body:"성공"
            }
        }
    }
    //추천
    function printLoginState(state:loginState){
        if(state.result ==="success"){
            console.log(`🎉 ${state.res.body}`)
        }else{
            console.log(`🎉 ${state.reason}`)
        }
    }
}