// The phenomenon which happens when we nest multiple callbacks 
// within a function is called a callback hell. 
// The shape of the resulting code structure resembles a pyramid 
// and hence callback hell is also called the  “pyramid of the doom”.
//  It makes the code very difficult to understand and maintain.


// function step1(){
//     setTimeout(()=>{
//     console.log("step1")
// },4000)// asynchronous
// }
// function step2(){
//     console.log("step2")
// }
// step1()
// step2()

// function step1(){
//     setTimeout(()=>{
//     console.log("step1")
//     // next_task()
// },4000)// asynchronous

// }

// function step2(){
//     console.log("step2")
// }
// step1()

function hell1(){
    setTimeout(()=>{
    console.log("hell1")
        setTimeout(()=>{
        console.log("hell2")
            setTimeout(()=>{
                console.log("hell3")
                setTimeout(()=>{
                    console.log("hell4")
                    setTimeout(()=>{                      // pyramid shape
                        console.log("hell5")
                    },1000)
                },8000)
            },1000)
        },2000)
    },3000)
}
hell1()

console.log("GOTOHELL");