var Backbone = require(__dirname+'/backbone');
var Balance = require(__dirname+'/balance');
var Account = require(__dirname+'/account');

var Balances = Backbone.Collection.extend({
  model: Balance,
  parse: function(response) {
    return response.balances;
  },
  url: function() {
    return '/v1/accounts/'+this.account.get('address')+'/balances'
  }
});

module.exports = Balances;

