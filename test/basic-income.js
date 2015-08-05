contract('BasicIncome', function(accounts) {
  it("should assert true", function(done) {
    var bi = BasicIncome.at(BasicIncome.deployed_address);
    assert.isTrue(true);
    done();
  });
});
