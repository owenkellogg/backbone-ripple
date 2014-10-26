
describe('account balances', function() {

  before(function(done) {
    account = new Account();
    account.lookup('stevenzeiler').then(done);
  })

  it('should get them', function(done) {
    var balances = new Balances({ 
      account: account
    })

    balances.fetch().then(function() {
      console.log(balances.models);
      done();
    });
  });
})
