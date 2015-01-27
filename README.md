ampersand-fullcalendar-view
===

An AmpersandJS wrapper for FullCalendar (http://fullcalendar.io/).


### install
```
npm install ampersand-fullcalendar-view
```

### demo
```
npm run demo
```

### usage

Check out the `demo.js` file.

```
var calendarView = new Calendar({
  el: div,
  collection: events,
  // events: eventsData,
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  },
  defaultDate: '2014-11-12',
  editable: false,
  eventLimit: true, // allow "more" link when too many events
});
```