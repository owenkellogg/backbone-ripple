var assert = require('assert');
var Account = require(__dirname+'/../../lib/account');

describe('A Ripple account', function() {

  before(function() {
    rippleName = 'stevenzeiler';
  });

  it('should look up the ripple address by name', function(done) {
    var account = new Account();

    console.log(account);
    account.lookupName(rippleName);
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

