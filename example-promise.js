function getTempCallback (location, callback) {
    callback(undefined, 2);
    callback('City not found');
}

getTempCallback('Helsinki', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

// PROMISES:

function getTempPromise (location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(5);
            reject('Ei löydy vieläkään');
        }, 1000);
    });
}

getTempPromise('Turku').then(function(temp){
   console.log('promise success', temp);
}, function (err) {
    console.log('promise error', err);
});

// Challenge Area


function addPromise (a, b) {
    return new Promise(function(resolve, reject){
       if (typeof a === 'number' && typeof b === 'number') {
           resolve(a + b);
       } else {
           reject('not a number');
       }
    });
}

addPromise(3, 6).then(function(sum) {
    console.log('sum is:', sum);
}, function (err) {
    console.log('error: ', err);
});

addPromise('a', 'b').then(function(sum) {
    console.log('sum is:', sum);
}, function (err) {
    console.log('error: ', err);
});