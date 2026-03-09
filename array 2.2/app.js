// Description:
// This function takes an array of numbers and returns a new array with each value doubled.
// Example: doubleValues([1,2,3]) // [2,4,6]
function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function(val) {
    newArr.push(val * 2);
  });
  return newArr;
}

// Description:
// This function takes an array and returns a new array with only the even values.
// Example: onlyEvenValues([1,2,3]) // [2]
function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function(val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

// Description:
// This function takes an array of strings and returns a new array with the first and last character of each string concatenated.
// Example: showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function(val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}

// Description:
// This function takes an array of objects, a key, and a value, and adds the key-value pair to each object in the array.
// Example: addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
// // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
function addKeyAndValue(arr, key, value) {
  arr.forEach(function(val) {
    val[key] = value;
  });
  return arr;
}

// Description:
// This function takes a string and returns an object with the count of each vowel in the string.
// Example: vowelCount('Elie') // {e:2,i:1}; vowelCount('Tim') // {i:1}; vowelCount('Matt') // {a:1}; vowelCount('hmmm') // {}; vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}
function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";

  splitArr.forEach(function(letter) {
    let lowerCasedLetter = letter.toLowerCase()
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}
// part 2 
// Description:
// This function takes an array of numbers and returns a new array with each value doubled.
// Example: doubleValues([1,2,3]) // [2,4,6]
function doubleValuesWithMap(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

// Description:
// This function takes an array and a key, and returns a new array with the values of that key from each object in the array.
// Example: extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
function extractKey(arr, key) {
  return arr.map(function(val) {
    return val[key];
  });
}

// Description:
// This function takes an array of objects and a key, and returns a new array with only the objects that contain that key.
// Example: filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"garnacho", isCatOwner:true}, {first: 'Matt', last:"Lane"}, {first: 'mark', last:"lance", isCatOwner:true}], 'isCatOwner') 
// // [{first: 'Tim', last:"garnacho", isCatOwner:true}, {first: 'mark', last:"lance", isCatOwner:true}]
function filterByValue(arr, key) {
  return arr.filter(function(val) {
    return val[key] !== undefined;
  });
}