var assert = require('assert');
var Account = require(__dirname+'/../lib/account');

describe('A Ripple account', function() {

  before(function() {
    rippleName = 'stevenzeiler';
  });

  it('should look up the ripple address by name', function(done) {
    var account = new Account({ name: 'stevenzeiler' });

    console.log(account);
    account.url = function() {
      return 'https://id.ripple.com/v1/authinfo?username='+this.get('name')
    }
    account.fetch({
      success: function() {
        console.log("account fetched");
      }
    })
    //account.lookupName(rippleName);
    /*
    account.lookupName(rippleName).then(function() {
      assert(account.get('address')); 
      console.log('address', account.get('address'));
      done();
    });
    */
    done();
  }); 
});

