let a = "hello";

const reverse_string = (string) =>{
    let b = '';
    for(let i = string.length; 0 < i; i--){
        b += string[i-1];
    }
    return b;
}

console.log(reverse_string(a));