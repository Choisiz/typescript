{
  //type aliases
  type Text = string;
  const name: Text = "messi";
  type Player = {
    name: string;
    age: number;
  };
  const player: Player = {
    name: "messi",
    age: 30,
  };
  //String Literal Types
  type Name = "messi";
  let playerName: Name;
  playerName = "messi";
}
