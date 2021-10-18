{
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction:Direction){
        console.log(direction)
    }
    move("right");

    type TileSize ='8'|"16"|"32";
    const tile: TileSize ='8';

    //예제 로그인(성공,실패)
    type successState = {
        res: {
            body:string
        }
    }
    type failState = {
        reason: string
    }
    type loginState = successState | failState;
    function login(id:string, pw: string):loginState{
        return {
            res:{
                body:"성공"
            },
            reason: "실패"
        }
    }
    //비추천
    function printLoginState(state:loginState){
        if('res' in state){
            console.log(`🎉 ${state.res.body}`)
        }else{
            console.log(`🎉 ${state.reason}`)
        }
    }
}