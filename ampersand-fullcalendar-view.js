var AmpersandView = require('ampersand-view');
var jquery = require('jquery');
var fullcalendar = require('fullcalendar');
var extend = require('amp-extend');

var defaultTemplate = '<div data-hook="calendar"></div>';

module.exports = AmpersandView.extend({
  render: function () {
    var self = this;

    this.template = this.template || defaultTemplate;

    this.renderWithTemplate();

    var events = this.events || this.collection.serialize();

    var options = {
      header: this.header,
      editable: this.editable,
      eventLimit: this.eventLimit,
      defaultDate: this.defaultDate,
      events: events,
    };

    extend(options, this.options);

    jquery(self.el).fullCalendar(options);

    setTimeout(function () {
      jquery(self.el).fullCalendar('render');
    }, 100);

  },
  props: {
    defaultDate: 'date',
    editable: 'boolean',
    eventLimit: 'boolean',
    header: 'any',
    events: 'any',
    options: 'object'
  }
});