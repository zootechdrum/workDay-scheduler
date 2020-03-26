$( document ).ready(()=> {

    //appends the current date to jumbotron
    $("#currentDay").append(moment().format("L"))

    let hours = 9;

    for(let i = 9; i < 18; i++){

      if(hours === 13){
        hours = 1;
      }

        const row = $("<div class='row time-block'>")
        const col1 = $("<div class='col-sm-2 hour'><p class='time-block'>"+hours+"</p></div>");
        const col2 = $("<div class='col-sm-8 present'><textarea class='description' name='' id='' cols='80' rows='1'></textarea></div>")
        const col3 = $("<div class='col-sm-2 saveBtn'><button class='saveBtns'>k</button>")
        row.append(col1)
        row.append(col2)
        row.append(col3)
        $(".container").append(row)
        ++hours
    }



})

{/* <div class="container">
<div class="row time-block">
  <div class="col-sm-2 hour">
      <p class="time-block">
        8:00
      </p>
    </div>
    <div class="present col-sm-8">
      <textarea class="description" name="" id="" cols="80" rows="1"></textarea>
    </div>
    <div class="col-sm-2 saveBtn">
        <button class="saveBtns">
H
        </button>
    </div>
  </div>
  <div class="row time-block">
      <div class="col-sm-2  hour">
          <p class="time-block">
            8:00
          </p>
        </div>
        <div class="present col-sm-8">
          <textarea class="description" name="" id="" cols="80" rows="1"></textarea>
        </div>
        <div class="col-sm-2 saveBtn">
            <button class="saveBtns">
H
            </button>
        </div>
      </div>
</div> */}