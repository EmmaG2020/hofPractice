// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
/*
I: array
O: value(number of elements that are mutiples of five)
C:
E:
Strategy:
create a var count, loop over the array, check every element to see if its multiples
of five, if it is, update count and return count at the end
*/
var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function(element) {
    if (element % 5 === 0) {
      count++;
    }
  });
  return count;
};

// use _.each to build an array containing only tweets belonging to a specified user.
/*
I: an array of objects
O: array
C:
E:
Strategy:
create an empty array messages, loop over each obj in the array, check if the user matches target
user, if it is, add the object to the empty array messages, return messages
*/
var getUserTweets = function(tweets, user) {
  var messages = [];
  _.each(tweets, function(obj) {
    if (obj.user === user) {
      messages.push(obj);
    }
  });
  return messages;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
/*
I: array, string
O: array with one element that is the target
C: should not create new array
E:
Strategy:
loop over the array, compare if element is equal to the target string, if it is, return it
as an array
Pseudocode:
//filter each element to see if element is equal to targetFruit
  //return element in an array
*/
var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function(element) {
    if (element === targetFruit) {
      return [element];
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
/*
I: Array, letter
O: an array with elements starting with letter
C: should not create a new array
E:
*/
var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(element) {
    return element[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
/*
I: array
O: array of objects whose type is cookie
C: should not creat a new array
E:
*/
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(element) {
    return element.type === 'cookie';
  });
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(element) {
    return element.user === user;
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
/*
I: Array
O: array that has element that has all upper case
C:
E:
*/
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
/*
I: array of objects
O: an array of new objects with extra property "glutenfree"(true/false)
C:
E:
strategy:
for each element in the input array, check if its "ingredient" property
has flour, if it does, add a new property "glutenfree" with false value and return
the new objects array, else, add a new property "glutenfree" with true value and
return the new objects array
pseudocode:
//return: map over each dessert
  //check if ingredient property has flower
    add new property glutenfree with truth value and return new property
  //else
    //add new property glutenfree with false value and return new property
*/
var glutenFree = function (desserts) {
  return _.map(desserts, function(dessert) {
    if (_.indexOf(dessert.ingredient, 'flour') === -1) {
      dessert.glutenFree = true;
      return dessert;
    } else {
      dessert.glutenFree = false;
      return dessert;
    }
  });
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
/*
I: array of objects
O: array of strings(message properties)
C:
E:
Strategy:
map over each element and return the messages property of each user
*/
var allUserMessages = function(tweets) {
  return _.map(tweets, function(user) {
    return user.message;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];
I: an array of objects
O: an array of objects with a new property salePrice
C:
E:
Strategy:
return a new array: get the price key value and times it with
coupon and add price back, round it to 2 numbers after decimal
point, add the result to new property salePrice, return the
updated object
pseudocode:
//return map over each product
  //add new property salePrice wth the value:
    get price of product and times it with (coupon + 1) and roud it down
  //return the current product

*/
var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(product) {
    var price = Number(product.price.slice(1));
    product.salePrice = '$' + (Math.round(price * (1 - coupon) * 100) / 100).toString();
    return product;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  return _.reduce(products, function(total, product) {
    var price = Number(product.price.slice(1));
    total += price;
    return total;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
/*
I: array of objects
O: object: property is the desertType and value is the number the desertType
C:
E:
strategy:
loop over each element, check if desert type exsit, if exsit, add one to its value,
if not, create a new desert type and add 1 to its value
*/
var dessertCategories = function (desserts) {
  /* var firstType = desserts[0].type;
  return _.reduce(desserts, function(allTypes, desert) {
    if (allTypes[desert.type] === undefined) {
      allTypes[desert.type] = 1;
    } else {
      allTypes[desert.type]++;
    }
    return allTypes;
  }, {firstType: 0}); */
  return _.reduce(desserts, function(allTypes, desert) {
    if (allTypes[desert.type] !== undefined) {
      allTypes[desert.type]++;
    } else {
      allTypes[desert.type] = 1;
    }
    return allTypes;
  }, {});
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }

I: array of objects
O: object
C:
E:
Strategy: set a messages object, check if user already exsit in object,
if it exist, increment the value with 1,
if it doesnt exist, add user to messegaes and set value as 1
pseudocode:
return :
  //set the initial accumulator as {}
    //if user already exist, increment 1
    //else create a new property and set as 1
    //return
*/
var countMessagesPerUser = function(tweets) {
  return _.reduce(tweets, function(messageCount, userInfo) {
    if (messageCount[userInfo.user] === undefined) {
      messageCount[userInfo.user] = 1;
    } else {
      messageCount[userInfo.user]++;
    }
    return messageCount;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
/*
I: array of objects
O: array of objects that came out between 1990 - 2000
C: use an array as accumulator and return it
E:
Strategy:
loop over the array and check if object's releaseYear, if its between 1990-2000,
add the object to accumulator
Pseudocode:
//return : reduce()
  //if movie's release year is between 1990 - 2000
    //add the movie to the90s
  //return the90s
*/
var ninetiesKid = function (movies) {
  return _.reduce(movies, function(the90s, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      the90s.push(movie.title);
    }
    return the90s;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
/*
I: an array of object
O: boolean
C: should not create new array
E:
Strategy: set the accumulator as false, if any movie has a shoter runtime than timelimit,
then change accumulator to true and return it
pseudocode:
//return: reduce's value
  //if runtime of movie is shorter than timeLimit
    //change accumulator to true
  //return accumulator
*/
var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(hasMovie, movie) {
    if (movie.runtime < timeLimit) {
      hasMovie = true;
    }
    return hasMovie;
  }, false);
};
