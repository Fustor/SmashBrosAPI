const assert = require('assert');
const app = require('../../src/app');

describe('\'stagelist\' service', () => {
  it('registered the service', () => {
    const service = app.service('stagelist');

    assert.ok(service, 'Registered the service');
  });
});
