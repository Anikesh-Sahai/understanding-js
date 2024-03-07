// callback

console.log("start")

function important (username, cb){
    setTimeout(()=>{
        cb("subscrib to " + username);
    },1000)
}

important("anieksh", function(message){
    console.log(message)
})
// important is async function it will print at last

console.log("end")


// promise is the best way to solve callback hell
// promises
// promise are also async operation

console.log("start")

const sub = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const result = true
        if(result) resolve("subscribed")
        else reject(new Error("unable to subscribe"))
    }, 2000)
})

sub.then((res)=>{
    //if promise is fullfilled the result will be in the
    console.log(res)

})
.catch((err)=>{
    // if promise is failed the result is here.
    console.error(err)
})

console.log("end")

