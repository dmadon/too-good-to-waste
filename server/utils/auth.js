const jwt = require('jsonwebtoken');

const secret = '0833cf7b-3277-40ac-a015-2eece62f52c3-b385f32c-1a07-4fb6-94be-54a43d50a755';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signUserToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  signPartnerToken: function({username, email, _id}) {
    const payload = { username, email, _id};
    return jwt.sign({ data: payload }, secret, {expiresIn: expiration});
  }
};