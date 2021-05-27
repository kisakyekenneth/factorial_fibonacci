//Pair programming Kenneth Kisakye with Mbabazi Suzan
module.exports = function factorial(n){
    if(n<2){
        return 1;
    }
    else{
        let num = 1;
        for(let i = 2; i<=n; i++){
            num = num * i;
        }
        return(num);
    }    
}



