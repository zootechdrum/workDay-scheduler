$( document ).ready(()=> {

    //appends the current date to jumbotron
    $("#currentDay").append(moment().format("L"))


    for(let i = 9; i < 18; i++){
        const row = $("<div class='row time-block'>")
        const col1 = $("<div class='col-sm-2 hour'><p class='time-block'>"+formatAMPM(i)+"</p></div>");
        const col2 = $("<div id="+(i)+" data-time="+ i +" class='col-sm-8'><textarea class='description' name='' cols='80' rows='1'></textarea></div>")
        const col3 = $("<div class='col-sm-2 saveBtn'><button class='saveBtns'>k</button>")
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

let currentHour = moment().hour()


    for(let j=9; j < 18; j++ ){
      if(currentHour > $("#"+j).data("time")){
        $("#"+j).addClass("past")

      }else if(currentHour === $("#"+j).data("time")){
      $("#"+j).addClass("present")
    } else if( currentHour <  $("#"+j).data("time")){
      $("#"+j).addClass("future")
    }
  }
})



