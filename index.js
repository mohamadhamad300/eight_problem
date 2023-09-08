/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:

Note : using sort native is not allowed

What is the time complexity for your solution ?

Optimize your solution!

Exanmples:
secondMax([1,5, 2,7,8])== 2
secondMax([-1, -5, 2])== -1
secondMax([-3, -2, -7]) == -3
*/

const secondMax = function(array) {
    // TODO
    var sec_max=0
    var max=0;
    console.log("begin work")
if(array.length>2){

    if(array[1]>array[0]){
        max=array[1];
        sec_max=array[0]
    }
    else{
        max=array[0];
        sec_max=array[1]  
    }
    
}
   // console.log(array.length)

   for ( i=0;i<array.length;i++){
if((array[i]>sec_max)&&(array[i]>max)){
sec_max=max;
max=array[i]
}

else if ((array[i]>sec_max)&&(array[i]<max)) {
    sec_max=array[i];

}
else if ((array[i]<sec_max)&&(array[i]<max)){
  //  sec_max=array[i];

}
   }


return sec_max
  }; 

var secound_max=  secondMax([-1,-5,-2,-7,8]);
console.log(secound_max);
  