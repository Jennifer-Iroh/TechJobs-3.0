let people = ["Greg", "Mary", "Devon", "James"];

for(let person = 0; person < people.length; person++){
  console.log(people[person]);
}

people.shift()
people.pop();
people.unshift('Matt')
people.push('Jennifer')

for(let person = 0; person < people.length; person++){
  console.log(people[person])
  if(people[person] === "Mary"){
    break;
  }
}

console.log(people.slice(2));

console.log(people.indexOf("Mary"));

console.log(people.indexOf("Foo"));

people.splice(2, 1, "Elizabeth", "Artie")

var withBob = people.concat("Bob")
console.log(withBob)

console.log(people);

