// BEGIN-SNIPPET update-store
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
const store = fleetbase.stores.updateRecord('store_id', {});

store.update({});
// END-SNIPPET
