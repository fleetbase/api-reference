// BEGIN-SNIPPET sdk-get-eta
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('{your_api_key}');

fleetbase.orders.getDistanceAndTime('{order_id}').then((dt) => {
    console.log(`Distance: ${dt.distance} & Time: ${dt.time}`);
});
// END-SNIPPET
