/*global document, console, window*/
// can be run with `npm run demo`
var Calendar = require('./ampersand-fullcalendar-view');
var fullcalendarCss = require('./vendor/fullcalendar.css');

var State = require('ampersand-state');
var Collection = require('ampersand-collection');

var eventsData = require('./vendor/demos/json/events.json');


var Event = State.extend({
  props: {
    id: 'string',
    title: 'string',
    start: 'date',
    end: 'date',
    url: 'string',
  }
});

var events = new Collection(eventsData, {
  model: Event
});

var div = document.createElement('div');

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


document.addEventListener('DOMContentLoaded',function() {
  calendarView.render();
});

window.calendarView = calendarView;

document.body.appendChild(calendarView.el);
