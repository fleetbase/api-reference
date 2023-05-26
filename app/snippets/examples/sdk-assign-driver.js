// BEGIN-SNIPPET sdk-assign-driver
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('{your_api_key}');

fleetbase.orders.findRecord('{order_id}').then((order) => {
    order.assignDriver('{driver_id}');
});
// END-SNIPPET
