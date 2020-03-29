$(document).ready(() => {



  //appends the current date to jumbotron
  $("#currentDay").append(moment().format("L"))


  for (let i = 9; i < 18; i++) {
    const row = $("<div class='row time-block'>")
    const col1 = $("<div class='col-sm-2 hour'><p class='time-block'>" + formatAMPM(i) + "</p></div>");
    const col2 = $("<div id=" + (i) + " data-time=" + i + " class='col-sm-8'><textarea id=text-" +i+ " class='description' name='' cols='80' rows='1'></textarea></div>")
    const col3 = $("<div  class='col-sm-2 saveBtn d-flex align-items-center justify-content-center' data-button="+i+"><i class='fas fa-save'></i></div>")
    row.append(col1)
    row.append(col2)
    row.append(col3)
    $(".container").append(row)
  }

  function formatAMPM(hours) {
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
  }

  //change colors of text area depending on the current time

  const updateColor = () => {
    let currentHour = moment().hour()


    for (let j = 9; j < 18; j++) {
      if (currentHour > $("#" + j).data("time")) {
        $("#" + j).addClass("past")

      } else if (currentHour === $("#" + j).data("time")) {
        $("#" + j).addClass("present")
      } else if (currentHour < $("#" + j).data("time")) {
        $("#" + j).addClass("future")
      }
    }
  }

  const callEveryHour = () => {
    setInterval(updateColor(), 100 * 60 * 60)
  }


//When save button is pressed
$("#container").on("click",'.saveBtn', function() {

  const dataIdButton = $(this).attr("data-button");
  const text = $("#text-"+dataIdButton).val()
  
  if(text.length !== 0){
  //save in local storage 
  localStorage.setItem(dataIdButton, text)

  }
})

const checkLocalStoreage = () => {

  const currentDate = moment().format("L")

  if(!localStorage.getItem("date")){
    localStorage.setItem("date" , currentDate )
  }else if(localStorage.getItem("date") !== currentDate){
    localStorage.clear()
    localStorage.setItem("date" , currentDate )
  }

  if(localStorage.length > 1 && localStorage.getItem("date") === currentDate){
    for(let i = 0; i < localStorage.length; i++){
      console.log($("#text-9"))
      
      if(localStorage.key(i) !== "date"){
        console.log($("#text-"+localStorage.key(i)))
        $("#text-"+localStorage.key(i)).val(localStorage.getItem(localStorage.key(i))) 
      }

    }
  }
  

}

checkLocalStoreage()
  callEveryHour()
})




