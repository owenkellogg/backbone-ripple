var Account = require(__dirname+'/../lib/account');

describe('account balances', function() {

  before(function(done) {
    account = new Account();
    account.lookupName('stevenzeiler').then(done);
  })

  it('should get them', function(done) {
    var balances = new Balances({ 
      account: account
    })

    balances.fetch().then(function() {
      console.log('fetched balances');
      console.log(balances.models);
      done();
    });
  });
})
