const position1: result1 = {
  x: 0,
  y: 0,
};

type result1 = { x: number; y: number };
type dire = "up" | "down" | "left" | "right";

function move1(dire: dire) {
  switch (dire) {
    case "up":
      position1.y += 1;
      break;
    case "down":
      position1.y -= 1;
      break;
    case "left":
      position1.x -= 1;
      break;
    case "right":
      position1.x += 1;
      break;
    default:
      throw Error("error");
  }
}

console.log(position1); // { x: 0, y: 0}
move1("up");
console.log(position1); // { x: 0, y: 1}
move1("down");
console.log(position1); // { x: 0, y: 0}
move1("left");
console.log(position1); // { x: -1, y: 0}
move1("right");
console.log(position1); // { x: 0, y: 0}
