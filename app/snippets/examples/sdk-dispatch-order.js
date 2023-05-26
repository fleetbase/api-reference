// BEGIN-SNIPPET sdk-dispatch-order
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('{your_api_key}');

fleetbase.orders.findRecord('{order_id}').then((order) => {
    order.dispatch().then((order) => {
        console.log(`Order dispatched at ${order.dispatched_at}`);
    });
});
// END-SNIPPET
