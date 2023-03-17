// BEGIN-SNIPPET retrieve-product
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
fleetbase.products.findRecord('product_id');
// END-SNIPPET
