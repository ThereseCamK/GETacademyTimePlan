function show(){

  let html = `

      <div class="page">
          <div class="header">${header()}</div>
          <div class="main">${createTable()}</div>
      </div>`;
  appDiv.innerHTML = html;
  
  }

  function header(){
    
    let html ='';
      for(let i = 0; i< model.options.length; i++){
        html+= `<button onclick="showOneModulOrTeacher(${model.options[i].id}, ${i})"> ${model.options[i].txt}  </button> `
      }
      html += ``;
      return html;
  }

  function createTable(){
    var html = `<h1>${model.selected}</h1><hr>`;
    let dayNos = Array.from(model.days.keys()) ;
    html += `<table>
    <tr>${dayNos.map(dayNo => `${createTableFromDayNumber(dayNo)}`).join(' ')}</tr>
    <tr>${findCorrectTimeAndDay(dayNos)} 
    </table>`
    return html;
  }
  
  function createTableFromDayNumber(dayNo){
   
      var html = `<th>${model.days[dayNo]}</th>`;


     
      return html
      
  }
  function findCorrectTimeAndDay(dayNos){
    console.log(dayNos, 'dayNos')
    var html = '<tr>';
        for(let i = 0; i < model.timeSlots.length;i++){
          html += `<td>${model.timeSlots[i]}</td>
          ${findSquareToTimeAndPlace(i)}
          </tr>`
        }
   
    return html;
  }
  function findSquareToTimeAndPlace(indexTime){
var html = '';
      for(let i =0; i< model.days.length -1; i++){
        html += `<td>${findEventToTimeAndDay(indexTime, i)}</td>`
      }
      return html;
  }

  function findEventToTimeAndDay(indexTime, indexDay){
      var html = '';

      for(let i = 0; i<model.events.length; i++){
        correctTimeSlot(i);
      }
      return html;

    function correctTimeSlot(i) {
      for (let t = 0; t < model.events[i].time.timeSlot.length; t++) {
        let dayOfevent = model.events[i].time.day;
        let timeOfEvent = model.events[i].time.timeSlot[t];
        checkEventTimeAndDay(i, timeOfEvent, dayOfevent);
      }
    }

    function checkEventTimeAndDay(i, timeOfEvent, dayOfevent) {
      for (let o = 0; o < model.events[i].option.length; o++) {
        let option = model.events[i].option[o];
        showevent(timeOfEvent, dayOfevent, option, i);
      }
    }

    function showevent(timeOfEvent, dayOfevent, option, i) {
      if (indexTime == timeOfEvent && dayOfevent == indexDay + 1 && option == model.selectedOption) {
        html += `${model.events[i].type}<br>`;
      }
    }
  }