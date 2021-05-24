module.exports = function fibonacci(n){
    var fibon = [];

    fibon[0] = 0;
    fibon[1] = 1;

    for(var i = 2; i<=n; i++){
        fibon[i] = fibon[i-2] + fibon[i-1];
        // console.log(fibon[i]);
    }
    return(fibon);
}
