//Question 1:

let nums = [1,2,3,4,5,6]
 nums.splice(2,2)


 //Questions 2:

 nums.splice(1,0,"Apple" , "Banana")


 //Question 3:

 //Slice Returns a new array and the original array remain unchanged

 //Splice changes the original array 

 let colors = ["Red" , "Blue " ,"Orange", "White" , "Indigo"]

 let clr = colors.slice(1, 3)

 colors.splice(1,3)


 //Question 4:
//  let arr = [23,44,13,16,78,99]

//  let arr1 = arr.slice(3,6)

 //Question 5:

 let arr = [10,20,30,40,50]

 arr.splice(2 ,2 , 300 , 400 )




 //Question 6:

let arr2 = [1,2,3,4]

let sqr = arr2.map((val) => {
    return val*val
})


//Question 7:
let words = ["Afzan" , "Zaid" , "Qasim"]

let newWord = words.map((val) => {
    return val.length
})

//Question 8:

let num = [1,2,3,4,5,6]

let num2 = num.filter((val) => {
    return val % 2 === 0
})


//Question 9 :

let Names = ["Afzan" , "Zaid Khan" , "Qasim" , "Muhtasib"]

let names = Names.filter((val) => {
    return val.length > 4
})


//Question 10:

let numbers = [1,2,3,4,5,6]
numbers.forEach((val , val1 ) => {
    
    console.log(`The number at ${val1} is ${val}`)
     
})

//Question 11:

let arr3 = [30,5,100,1]
arr3.sort((val , val1) => {
    return val - val1
})


//Question 12:

let sum = [10,20,30,40]

let sum1 = sum.reduce(function(acc , val){
    return acc + val
} , 0)

//Question 13:

let max = [5,112,18,3,25]

let max1 = max.reduce((acc , val) => {
    acc == val
    if(val > acc){
        return val
    }
    else{
        return acc
    }

    
},0)