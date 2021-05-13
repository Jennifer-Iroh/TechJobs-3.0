//OBJECT 1
let nestedData = {
  innerData: {
    order: ['first', 'second', 'third'],
    snacks: ['chips', 'fruit', 'crackers'],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    },
  },
};

//Question 1
let primeNumArr = nestedData.innerData.numberData.primeNumbers;
for (i = 0; i < primeNumArr.length; i++) {
  console.log(primeNumArr[i]);
}

// Question 2
let fibonnaciNumArr = nestedData.innerData.numberData.fibonnaci;
for (i = 0; i < fibonnaciNumArr.length; i++) {
  console.log(fibonnaciNumArr[i]);
}

// Question 3
console.log(nestedData.innerData.order[1]);

// Question 4
nestedData.innerData.addSnack('chocolate');

// Question 5
// this keyword refers to the entire object and makes referencing keys easier.

// OBJECT 2
let nestedObject = {
  speakers: [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: 'Bern',
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: 'Hola',
      },
      french: {
        hello: 'Bonjour',
      },
    },
  },
};

// Question 1
function addSpeaker(speakername) {
  nestedObject.speakers.push({ name: speakername });
  return nestedObject.speakers;
}

//Question 2
function addLanguages(language, helloInLanguage) {
  nestedObject.data.languages[language] = {
    hello: helloInLanguage,
  };
  return nestedObject.data.languages;
}

// Question 3
function addCountry(name, capital, population) {
  nestedObject.data.continents.europe.countries[name] = {
    capital: capital,
    population: population,
  };
  return nestedObject.data.continents.europe.countries;
}
