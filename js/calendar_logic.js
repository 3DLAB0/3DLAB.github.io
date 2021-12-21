function set_event(name,task) {
    var active_date = $('#calendar').evoCalendar('getActiveDate');
    $('#calendar').evoCalendar('addCalendarEvent', {
        id: '3D Print',
        name: name,
        description: 'Lorem ipsum dolor sit..',
        date: active_date,
        type: task,
        });
    alert("Event on " + active_date);
  }