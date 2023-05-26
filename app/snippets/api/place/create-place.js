// BEGIN-SNIPPET create-place
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');

// using name, and location
fleetbase.places
    .create({
        name: 'Space Needle',
        location: {
            type: 'Point',
            coordinates: [47.6204232, -122.34935530000001],
        },
    })
    .then((spaceNeedle) => {
        console.log(spaceNeedle);
    });

// using address
fleetbase.places
    .create({
        address: 'Space Needle, Seattle, WA',
    })
    .then((spaceNeedle) => {
        console.log(spaceNeedle);
    });

// END-SNIPPET
