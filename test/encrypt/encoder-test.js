var chai = require('chai');
var expect = chai.expect;
var Encoder = require('../../encrypt/encoder');

var encoder = new Encoder();

describe('Encode', function() {
  it('encode("HELLO") should return "KHOOR"', function() {
    expect(encoder.encode("HELLO")).to.equal("KHOOR");
  });

  it('encode(null) should return null', function() {
		expect(encoder.encode(null)).to.be.a('null');
	});

  it('encode("") should return ""', function() {
		expect(encoder.encode('')).to.equal('');
	});

  it('encode("M") should return "P"', function() {
		expect(encoder.encode("M")).to.equal(("P"));
	});

  it('encode("ZACK") should return "CDFN"', function() {
		expect(encoder.encode("ZACK")).to.equal("CDFN");
	});

  it('encode("HELLO ZACK!!!") should return "KHOOR CDFN!!!"', function() {
		expect(encoder.encode("HELLO ZACK!!!")).to.equal("KHOOR CDFN!!!");
	});

  it('encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ") should return "DEFGHIJKLMNOPQRSTUVWXYZABC"', function() {
		expect(encoder.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).to.equal("DEFGHIJKLMNOPQRSTUVWXYZABC");
	});

  it('decode("KHOOR") should return "HELLO"', function() {
		expect(encoder.decode("KHOOR")).to.equal("HELLO");
	});

  it('decode(null) should return null', function() {
		expect(encoder.decode(null)).to.be.a('null');
	});

  it('decode("") should return ""', function() {
		expect(encoder.decode("")).to.equal("");
	});

  it('decode("P") should return "M"', function() {
		expect(encoder.decode("P")).to.equal("M");
	});

  it('decode("CDFN") should return "ZACK"', function() {
		expect(encoder.decode("CDFN")).to.equal("ZACK");
	});

  it('decode("KHOOR CDFN") should return "HELLO ZACK"', function() {
		expect(encoder.decode("KHOOR CDFN")).to.equal("HELLO ZACK");
	});

  it('decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ") should return "XYZABCDEFGHIJKLMNOPQRSTUVW"', function() {
		expect(encoder.decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).to.equal("XYZABCDEFGHIJKLMNOPQRSTUVW");
	});

});
