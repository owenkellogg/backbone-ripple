var Backbone = require('./backbone.js');
var Balances = require('./balances.js');
var Payments = require(__dirname+'/payments');

var Account = Backbone.Model.extend({
  url: function() {
    return 'https://id.ripple.com/v1/authinfo?username='+this.get('name')
  },
  getBalances: function() {
    if (this.balances) { 
      return this.balances;
    } else {
      return this.setBalances(new Balances());
    }
  },
  setBalances: function(balances) {
    if (!(balances instanceof Balances)) { 
      return new TypeError('balances must be instance of Balances');
    }
    balances.setAccount(this);
    return this.balances = balances; 
  }
});

module.exports = Account;
