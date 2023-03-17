// BEGIN-SNIPPET update-category
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
const category = fleetbase.categorys.updateRecord('category_id', {});

category.update({});
// END-SNIPPET
