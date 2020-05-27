//lilah fraser problems 32 and 33, may 26
//prob 1 (32)
function prime_position(int){
    var arr = [];
    var val = 0;
    var prime = 0;

    while(int>=arr.length){
        val+= 1;
        if(val < 2){
            prime = 2;
        }
        for(var i = 2; i <= Math.sqrt(val); i++){
            if(val %i == 0){
                prime+=1;
            }
            if(prime >= 1){
                break;
            }
        }
        if(prime == 0){
            arr.push(val);
        }
        prime = 0;
    }
    return arr[int-1];
}


//prob 2 (33)
function sort_subtract(int){
    str = String(int);
    strx = "";
    stry = "";
    arr = [];

    for(i = 1; i<str.length+1;i ++){
        arr.push(str.substring(i-1,i));
    }
//new arr
    arr.sort((a,b) => a-b);
    for( o = 0; q<arr.length; o++){
        strx += arr[o];
    }
    for( k = arr.length-1; k >= 0; k--){
        stry += arr[k];
    }
//max possible
    var x = parseInt(strx, 10);
    var y = parseInt(stry, 10);

    return y-x;
}

