import crypto from 'crypto';

// create hash

const hash = crypto.createHash('sha256');
hash.update('password1234');
console.log(hash.digest('hex'));

 
// randomBytes()
crypto.randomBytes(16, (err, buf) => {
  if(err) throw err;
  console.log(buf.toString('hex'))
});
// Node.js program to demonstrate the	 
// crypto.createHash() method

// Includes crypto module
const crypto = require('crypto');

// Defining key
const secret = 'Hi urban';

// Calling createHash method
const hash2 = crypto.createHash('sha256', secret)

	// updating data
	.update('How are you?')

	// Encoding to be used
	.digest('hex');

// Displays output
console.log(hash2);


//  createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key  = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('hello this is a secreate message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted); 

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += cipher.final('utf8');
console.log(decrypted);