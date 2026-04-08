// Functions
function func(){
    console.log("hello abhay");
}

func();

function func1(a,b){  // arguments
    console.log(a+b);
}
func1(3,4);  // paramters

function func2(a,b){
    return a*b;
}

let rett=func2(3,4);
console.log(rett);

// functions with unlimited arguments
function func3(){
    let ans=0;
    for(let i=0;i<arguments.length;i++){
        ans=ans+arguments[i];
    }
    return ans;
}
let ans=func3(2,30,67,100);
console.log(ans);

function add(...numbers){
    let ans=0;
    for(let i=0;i<numbers.length;i++){
        ans=ans+numbers[i];
    }
    return ans;
}
let ans1=add(10,2030);
console.log(ans1);

