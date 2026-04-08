// arrow functions
// syntax
const func1 = () =>{
    console.log("this is arrow function");
}
func1();

const add = (a,b) =>{
    console.log(a+b);
}
add(10,20);
// arguments keywork is not in arrow functions
// hoisting
// normal fucntion if we call above the intialisation we can do
// but in arrow not possible
//this keyword
const obj={
    value:20,
    myfunc: function(){
        console.log(this.value);
    }
};

obj.myfunc();

const obj1={
    val:20,
    mufunc: () =>{
        console.log(this.val);
    }
}
obj1.mufunc();

// in this refers to the window object, not the current object

