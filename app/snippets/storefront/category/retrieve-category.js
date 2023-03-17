// BEGIN-SNIPPET retrieve-category
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
fleetbase.categorys.findRecord('category_id');
// END-SNIPPET
