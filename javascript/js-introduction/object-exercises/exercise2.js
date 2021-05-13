let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//Number 1
programming.languages.push("Go");

//Number 2
programming.difficulty = 7;


//Number 3
delete programming.jokes;

// Number 4
programming.isFun = true;

// Number 5
for (let language of programming.languages){
    console.log(language);
}

// Number 6
for (let key in programming){
    console.log(key)
}
// Number 7
for (let key in programming){
    console.log(programming[key]);
}

