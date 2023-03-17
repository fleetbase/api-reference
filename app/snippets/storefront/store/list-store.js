// BEGIN-SNIPPET list-store
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
fleetbase.stores.destroyRecord('store_id');
// END-SNIPPET
