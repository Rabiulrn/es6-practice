function add(num1, num2 = 20){//es6 a default value deoya jay
    //es6 bade normal system
    // if(num2 == undefined){
    //     num2=0;
    // }
    // or
    // num2 = num2 || 0;
    return num1 + num2;
}
//const total = add(15);
const total = add(15, 1);//es6 onujayi...add(15) dile
//15+20(default)=35 output asbe.kintu value diye dile
//default ignore hobe
console.log(total);