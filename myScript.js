$( document ).ready(()=> {
    console.log(moment().format("h"))
    //appends the current date to jumbotron
    $("#currentDay").append(moment().format("L"))
})

