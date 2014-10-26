var Backbone = require('backbone');

var Payment = Backbone.Model.extend({
  parse: function(data) {
    return data.payment;
  }
});

module.exports = Payment;

