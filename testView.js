

    
    function createTable(){
    
        let html = `<table>
            <tr>${createTableHeader()}</tr>`;
    
        for(let i = 0; i <model.timeSlots.length; i++){
            html += ` ${createTableRow(i)}`
        }
        ` </table>`;
        return html;
    }
    
    function createTableHeader(){
      let html = '';
        for(let i = 0; i < model.days.length; i++){
           html += `<th>${model.days[i]}</th>`
        }
    
        return html;
    }
    
    function  createTableRow(timeslot){
      const dayNos = Array.from(model.days.keys());
    let html = `<tr><td>${model.timeSlots[timeslot]}</td>
    `;
        for(let i = 0; i < model.events.length; i++){    
          html+=`<td> ${createContentInTable(timeslot, i)}</td>`  
        } 
        html +=`</tr>`
    
        return html
    }
    
    
    function createContentInTable(timeslot, i){
        let html = ``;
        html = craterowsinTable(i, html, timeslot);
        return html;
    }
    
    
    
    
    function craterowsinTable(i, html, timeslot) {
      for (let y = 0; y < model.events[i].time.timeSlot.length; y++) {
        let timeOfEvent = model.events[i].time.timeSlot[y];
        html = chosenOptionisshownintable(i, html, timeOfEvent, timeslot);
      }
      return html;
    }
    
    function chosenOptionisshownintable(i, html, timeOfEvent, timeslot) {
      for (let l = 0; l < model.events[i].option.length; l++) {
        let option = model.events[i].option[l];
        html = placeincorrectday(timeOfEvent, timeslot, option, html, i)
        
      }
      return html;
    }
    
    function placeincorrectday(timeOfEvent, timeslot, option, html, i){
      
      for (let j = 0; j < model.days.length ; j++) {
        let dayOfevent = j;
        
          // console.log(option, ' id på person/ modul ',timeOfEvent, 'time.timeslot', timeslot, 'timeslot' )
        html = checkifeventisplacedatcorectdayandtime(timeOfEvent, timeslot, option, html, i, dayOfevent);
        
      }
    return html;
    }
    
    
    function checkifeventisplacedatcorectdayandtime(timeOfEvent, timeslot, option, html, i, dayOfevent) {
      if (timeOfEvent == timeslot && model.selectedOption == option && model.events[i].time.day == dayOfevent) {
        html += `${model.events[i].type}`;
      }
      return html;
    }
    