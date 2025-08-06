// ....Arrays

// Collection of multiple items in a single variable is called Arrays


// Methods of arrays


// 1.   push : add elements to array
//2.    pop(): remove the last element of array

let array = [1,2,3,4,5]

// array.push(9)
// console.log(array)

// array.pop()

// console.log(array)



//3. unshift : this method is use to add element in the first index
//4. shift : this method is use to remove element present on the first index
// array.unshift(11)
// console.log(array)

// array.shift()
// console.log(array)


// 5.  include: this method is used to find that the element is present or not in the array
//         this answer in  bolean type either true or false

        // console.log(array.includes(2))



//6.    index of:this method is used to find the selected array position    

    // console.log(array.indexOf(4))



//7.    join:   this method is use to convert the arrays elements into strings

    // console.log(array.join())
   
//8.    Splice: This method is use to remove elements from the center it takes the index and
//              the number of elements to be removed    


    let arr = [11,122,23,24,35,16,7,8,9,10]
    // arr.splice(3,7)

    let colors = ["Red" , "Yellow"]

    colors.splice(1,0,"Blue" ,"Orange")
   
//9.    Slice:This method is use to give a new copy of array and the original one is remained unchanged
//              it print the selected elements

    let newArr = arr.slice(0,8)


//10.   Reverese: This method is use to reverse an array,it changes the original array

    // arr.reverse()

 //11.  Sort : This method is use to make the order of an array,its either ascending or descending order
 //         it usually takes a function
 
    let srt = arr.sort(function (a,b){
        return a - b
    })

    let Names = ["Zaid" ,"Afzan" , "Qasim" ,"Muhtasib"]
    Names.sort().reverse()


//12.   Map : it uses loop on existing array like ForEach method but it returns us a new array
        // like sort it takes a function
        // it makes array on the basis of the previous array

     let mapp = arr.map(function (val){
        return val + 5

     }) 

     let sqr = [2,4,6]
    let newSqr =  sqr.map(function(val){
        return val*val
     })

     
//13. filter: it returns us a new array it accept either True or False 
//  True -> accept element  in array
//  false -> Do not accept element in array


let filterr = arr.filter((val) => {
    if(val > 20 )
         return true

})


//14 . Reduce : it return us a single value from a whole array

        // -> It accept a accumulator(Initialize a value and then remember the value)
        // -> accept a value

    let ans = arr.reduce(function(accumulator, val){
        return accumulator + val
    },0)


  //15. Find : It returns the element which return an elemtn from the array which met the condition
  
    let finnd = arr.find(function(val){
        return val >= 20
    })