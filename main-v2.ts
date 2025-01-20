interface Human {
    name: string;
    age: number;
    location: string;
    motor: string;
  }
  
  let objectHuman2: Human = {
    name: "John",
    age: 20,
    location: "Jakarta",
    motor: "Honda",
  };
  
  function printHuman2(human: Human): void {
    console.log(human.location);
  }
  
  printHuman(objectHuman);