/**
 * Let's make a game 🕹
 */

type location ='up'|'down'|'left'|'right';

type result ={
    x:number;
    y:number;
}

const position:result ={
    x:0,
    y:0
};

function move(commend: location):result{
    if(commend =="up"){
        position.y+=1;
    }else if(commend =="down"){
        position.y-=1;
    }else if(commend=="left"){
        position.x-=1;
    }else if(commend=="right"){
        position.x+=1;
    }else{
        throw Error("error")
    }
    return position;
}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
