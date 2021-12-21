
function toogle_button(id){
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}     

function button_clip_copy(id) {
    navigator.clipboard.writeText(id);
    alert("Copied the text: " + id);
  }



function set_event() {
    var active_date = $('#calendar').evoCalendar('getActiveDate');
    $('#calendar').evoCalendar('addCalendarEvent', {
        id: '3D Print',
        name: 'Mom\'s Birthday',
        description: 'Lorem ipsum dolor sit..',
        date: 'May 27, 2020',
        type: 'birthday'
        });
    alert("Event on " + active_date);
  }