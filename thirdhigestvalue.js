
let uniquearr =[];

for( let i=0; i<arr.length; i++){
    let currentvalue = arr[i]
    // console.log (currentvalue);
    
    if(!uniquearr.includes(currentvalue)){
        // console.log(uniquearr);
        uniquearr.push(currentvalue);
        // console.log(uniquearr);
    }
}

uniquearr.sort((a,b)=> b-a);
if(uniquearr.length >= 3){
    let thirdhigest = uniquearr[2];
    console.log(thirdhigest);
    
}else{
    console.log("not find");
}

 console.log(uniquearr);