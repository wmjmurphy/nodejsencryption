var S = require('string');

/**
 * Alphabet String to be used as reference
 */
const ALPHABET = S('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

/**
 * Increment and subtraction used for encoding and decoding
 */
const OFFSET = 3;

/**
 * Define a increment during the encoding
 */
const ENCODE_MODE = 1;

/**
 * Define a subtraction during the decoding
 */
const DECODE_MODE = -1;

/**
 * Returns a String encoded or decoded depending on the mode informed
 * ENCODE_MODE returns a encoded String
 * DECODE_MODE returns a decoded String
 *
 * @param text	String to be encoded or decoded
 * @param mode	Operation desired ENCODE_MODE or DECODE_MODE
 * @return		Encoded or decoded String depending on the mode informed
 */
function encodeDecode(text, mode) {
  if (text == null)
    return text;

  var textEncoded = '';
  for (var count = 0; count < text.length; count++) {
    var index = ALPHABET.indexOf(text.charAt(count));
    if ( index != -1) {
      textEncoded = textEncoded + ALPHABET.charAt((((index+(OFFSET*mode))+ALPHABET.length) % ALPHABET.length));
    } else {
      textEncoded = textEncoded + text.charAt(count);
    }
  }
  return textEncoded;
}

module.exports = function() {

  this.encode = function(text) {
    return encodeDecode(text, ENCODE_MODE);
  }

  this.decode = function(text) {
    return encodeDecode(text, DECODE_MODE);
  }

}
