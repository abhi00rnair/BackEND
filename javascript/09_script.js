// high order functions and callbacks
// a function which takes function as argument

function add(a,b){
    return a+b;
}
add(2,4);
// high order

function add1(a, b, cb){
    return cb(a,b);
}
function add2(x,y){
    return x+y;
}
console.log(add1(2,4,add2));

// i can return a function also
function sub(a,b,cb){
    let res=a-b;
    cb(res);
    return () => console.log(res); // here function is returned 
}

function show(val){
    console.log(val," by the call back");
}

let res=sub(10,5,show);
res();
