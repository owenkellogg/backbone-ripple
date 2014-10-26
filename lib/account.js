var Backbone = require(__dirname+'/backbone');
var Balances = require(__dirname+'/balances');
var Payments = require(__dirname+'/payments');

var Account = Backbone.Model.extend({
  constructor: function() {
    var account = this;
    this.balances = new Balances({ account: account })
    this.payments = new Payments({ account: account })
    Backbone.Model.apply(this, arguments);
  },
  lookupName: function(name) {
    this.fetch({
      url: 'https://id.ripple.com/v1/authinfo?username='+name
    });
  }
});

module.exports = Account;
