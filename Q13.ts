// 12. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let vechiles: string[] =[
    "Civic",
    "Hilux",
    "Land cruser",
    "Farari",
    "Audi R8",
];

// method of print 1
// console.log("I would like to own a" + " " + vechiles[0]);
// console.log("I would like to own a" + " " + vechiles[1]);
// console.log("I would like to own a" + " " + vechiles[2]);
// console.log("I would like to own a" + " " + vechiles[3]);
// console.log("I would like to own a" + " " + vechiles[4]);

// method of print 2

vechiles.map((item) => console.log (`i would like to own a ${item}`));