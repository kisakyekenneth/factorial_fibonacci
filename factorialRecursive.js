//Pair programming with Mbabazi Suzan and Kenneth Kisakye
module.exports = function factorial(n){
    if(n<2){
        return 1;
    }
    else if(typeof(n)!= "number"){
        return "undefined";
    }
    else{
        return n* factorial(n-1);
    }    
}



