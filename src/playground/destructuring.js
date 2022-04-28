// const person = {
//   age: 27,
//   location: {
//     city: "Gothenburg",
//     temp: 8,
//   },
// };

// const { name: personName = "Anonymous", age } = person;

// console.log(`${personName} is ${age}.`);
// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

const address = ["1299 S Juniper Street", "Philadelphia", , "19147"];

const [, city, state = "NY", zipCode] = address;
console.log(`You are in ${state}`);
