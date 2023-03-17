// BEGIN-SNIPPET query-product
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
fleetbase.products.destroyRecord('product_id');
// END-SNIPPET
