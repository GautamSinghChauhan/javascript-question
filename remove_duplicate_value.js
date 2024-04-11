let arr =[1,2,3,4,5,4,2,5,6,7,8,4];


let uniquearr =[];

for( let i=0; i<arr.length; i++){
    let currentvalue = arr[i]
    console.log (currentvalue);
    
    if(!uniquearr.includes(currentvalue)){
        // console.log(uniquearr);
        uniquearr.push(currentvalue);
        // console.log(uniquearr);
    }
    
    
}
 console.log(uniquearr);