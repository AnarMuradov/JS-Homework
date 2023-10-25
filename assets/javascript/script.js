// ?  1.prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin
// let num = +prompt();
// let num1 = num

// if(num%2===1){
//     console.log(num1 + " 2-nin quvveti deyil")
// }
// else if(num%2===0){
//     while(num/2 >=2){
//         num=num/2
//     }
//     if(num%2===0)
//      {console.log(num1 + " 2-nin quvvetidir")}
//      else{
//                         console.log(num1 + " 2-nin quvveti deyil")
//                     }
// }

// ? 2.Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin
// ?    (example: 3 ve 5 ededleri gonderilir , 5 ustu 3 olur oda bize =>125 qayatarir.)

// let num1 = +prompt();
// let num2 = +prompt();

// let num3=1
// for(let i = 1;i<=num1; i++){
//     num3=num3*num2
// }
// console.log(num3);

// ? 3. 1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)

// let sum1 =0
// let sum2 =0

// for (let i = 0; i <100; i++) {
//     if (i%11==0) {

//         console.log(i);

//         sum1=sum1+i
//     }

// }
// for (let i = 100; i <1000; i++) {
//     if (i%111==0) {

//         console.log(i);

//         sum2=sum2+i
//     }

// }
// console.log(sum1+sum2);

// ? 4.Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.

// const arr = [1,2,3,4,5];
// let maxcut = 0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2 === 0){
//         if(maxcut<arr[i])
//         maxcut=arr[i]
//     }
// }
// console.log(maxcut);

// ? 5.Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.

// const arr = [2,0,-3,-1,5];
// let mintek = 0;
// let minindex = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2 !== 0){
//         if(arr[i]<mintek){
//         mintek=arr[i]
//         minindex=i
//     }
//     }
// }
// console.log(minindex);

// ? 6.Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin.
// let a=0;
// let sade=0
// let murekkeb=0;
// const arr = [4,6,9,7,5,8,11];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j <=arr[i]; j++) {
//         if(arr[i]%j===0){
//             a++
//         }
//     }
//     if(a<=2){sade++}
//     else{murekkeb++}
//     a=0
// }
// console.log(sade + " sade eded");
// console.log(murekkeb + " murekkeb eded");

// ? 7.Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin.

// const arr = [-2,4,0,-1,3];
// let max =0;
// let min =0;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum=sum+arr[i];
//     if(max<arr[i]) max=arr[i];
//     if(arr[i]<min) min=arr[i];
// }
// console.log(max+min + " - minimum ededle maksimum ededin cemi");
// console.log(sum + " - array-in ededi ortasi" );
// if(max+min>sum){
//     console.log("minimum ededle maksimum ededin cemi array-in ededi ortasindan boyukdur")
// }
// else{console.log("minimum ededle maksimum ededin cemi array-in ededi ortasindan kicikdir")}

// ? 8.Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.
// let num = +prompt();
// let num1 = num;
// let num2;
// let num3 = num;
// const arr = [0, 0];
// let i = 0;
// let max =0
// let newArray;


// while (num2 < 0) {
//   num1 = num1%10;
//   newArray = [...original,num1];
//   num2 = (num3-num1)/10;
//   num1 = num2;
//   num3 = num2;
// }
// for(i=0; i<7;i++)
// {
//     if(max<Array[i]) max=Array[i];
// }
// console.log(max)
