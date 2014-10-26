var Backbone = require(__dirname+'/backbone');
var Payment = require(__dirname+'/payment');
var Account = require(__dirname+'/account');

var Payments = Backbone.Collection.extend({
  model: Payment,
  parse: function(response) {
    return response.payments;
  },
  url: function() {
    return '/v1/accounts/'+this.account.get('address')+'/payments'
  }
});

module.exports = Payments;

