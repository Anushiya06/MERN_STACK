
async function asAw(){
    setTimeout(()=>{
        return("Inside Timeout");
    },5000)
    //return "this is async example"
}
console.log(asAw())

asAw().then(function(output){
    console.log(output);
})

