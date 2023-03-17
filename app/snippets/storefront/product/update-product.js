// BEGIN-SNIPPET update-product
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
const product = fleetbase.products.updateRecord('product_id', {});

product.update({});
// END-SNIPPET
