import { moduleForModel, test } from 'ember-qunit';

moduleForModel('role', 'Unit | Model | role', {
  // Specify the other units that are required for this test.
  needs: ['model:role-invite']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
