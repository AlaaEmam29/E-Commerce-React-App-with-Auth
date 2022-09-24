require('dotenv').config()

// This is your test secret API key.

exports.handler = async function (event, context) {

  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  }
}
