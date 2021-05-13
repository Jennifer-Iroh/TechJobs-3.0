let people = ["Greg", "Mary", "Devon", "James"];

// 1
for(let person = 0; person < people.length; person++){
  console.log(people[person]);
}

// 2
people.shift()

// 3
people.pop();

// 4
people.unshift('Matt')

// 5
people.push('Jennifer')

// 6
for(let person = 0; person < people.length; person++){
  console.log(people[person])
  if(people[person] === "Mary"){
    break;
  }
}

// 7
console.log(people.slice(2));

// 8
console.log(people.indexOf("Mary"));

// 9
console.log(people.indexOf("Foo"));

// 10
people.splice(2, 1, "Elizabeth", "Artie")

// 11
var withBob = people.concat("Bob")
console.log(withBob)

console.log(people);

