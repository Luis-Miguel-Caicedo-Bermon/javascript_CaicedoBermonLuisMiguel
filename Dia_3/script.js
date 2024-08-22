
var numeron = prompt("numero");
var pru;
var numeroy;
var numerox=0;
var bool=true;
while (bool==true) {
    pru = numeron.length;
    console.log(pru);
    
    if (pru>1){
        numerox=0
        for (const i of numeron){
            numerox+=(Math.floor(i));
            
            console.log(numerox);
            
        }
        numeroy =numerox.toString()
        pru = numeroy.length;
        console.log(pru);
        
    }
    else if (pru==1){
        console.log(numerox);
        bool=false;
    }
    numeron=numerox;
}
