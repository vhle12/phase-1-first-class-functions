function callback() {
    console.log("This is the callback");
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
    return function namedFunction() {
        console.log("Named function");
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        return "Anonymous function"
    }
}
