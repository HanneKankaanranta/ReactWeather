var names = ['Hanne', 'Miika', 'Hanna'];

//names.forEach(function (name) {
  //  console.log('forEach', name);
//});

//names.forEach((name) => {
 //   console.log('arrowFunc', name);
//});

//names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//console.log(returnMe('Hanne'));

// var person = {
//    name: 'Hanne',
//    greet: function () {
//        names.forEach((name) => {
//           console.log(this.name + ' says hi to ' + name);
//        });
//    }
//};

//person.greet();

// Challenge Area
function add (a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
};

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(0, 9));

console.log(addStatement(1, 4));
console.log(addStatement(0, 8));

console.log(addExpression(1, 5));
console.log(addExpression(0, 7));