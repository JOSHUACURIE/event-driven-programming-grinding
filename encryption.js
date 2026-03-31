const names="Joshua Juma";
const specimen=names.split("");

const maximumSet=[1,2,3,4,5,6,7,8,9,10];
const endPoint=Math.round(specimen.length/2);
let num1;
let num2;

for(let i=0;i<maximumSet.length;i++){
    for(let j=i+1;j<maximumSet.length;j++){
        if(maximumSet[i]+maximumSet[j]==endPoint){
            num1=maximumSet[i];
            num2=maximumSet[j];
        }
    }
}
const shiftElements=(arr)=>{
    const result=new Array(arr.length);
    const len=arr.length;

    for(let i=0;i<len;i++){
        let newIndex;
        if(i==0){
            newIndex=(i + num1) % len;
        }else if( i=== len -1){
            newIndex=(i-num2+len) % len;
        }else {
            newIndex = i;
        }
        result[newIndex]=arr[i];
    }
    return result;
}
const sample=shiftElements(specimen);
console.log(sample);