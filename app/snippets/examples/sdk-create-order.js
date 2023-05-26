// BEGIN-SNIPPET sdk-create-order
import Fleetbase, { Place, Entity, Payload, Point } from '@fleetbase/sdk';

const fleetbase = new Fleetbase(`{your_api_key}`);

const pickup = new Place({
    name: 'Nike Warehouse',
    location: new Point(35.0121718, -89.8945123),
});

const dropoff = new Place({
    name: 'Distribution Center',
    location: new Point(35.025949, -89.9295741),
});

const payload = new Payload({
    pickup,
    dropoff,
    entities: [
        new Entity({
            name: 'Nike Stock',
            width: 30,
            height: 42,
            length: 43,
            dimensions_unit: 'cm',
            weight: 33,
            weight_unit: 'kg',
        }),
    ],
});

fleetbase.orders.create({ payload }).then((order) => console.log(order));
// END-SNIPPET
