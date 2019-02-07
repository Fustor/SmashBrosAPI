const assert = require('assert');
const app = require('../../src/app');

describe('\'Fighters\' service', () => {
  it('registered the service', () => {
    const service = app.service('fighters');

    assert.ok(service, 'Registered the service');
  });
});
