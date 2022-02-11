import React from 'react';

const drivers = [
    {
        id: 1,
        cur_lat: 37.3382,
        cur_lon: 121.8863,
        des_lat: 37.8044,
        des_lon: 122.2712
    },
    {
        id: 2,
        cur_lat: 37.5382,
        cur_lon: 121.8863,
        des_lat: 37.337,
        des_lon: 121.8907
    },
    {
        id: 3,
        cur_lat: 37.3382,
        cur_lon: 121.5863,
        des_lat: 36.7783,
        des_lon: 119.4179
    },
    {
        id: 4,
        cur_lat: 37.3482,
        cur_lon: 121.5863,
        des_lat: 37.3230,
        des_lon: 122.0322
    },
    {
        id: 5,
        cur_lat: 37.3382,
        cur_lon: 121.5963,
        des_lat: 37.2872,
        des_lon: 121.9500
    },
]

export default class FindDriver extends React.Component {
    constructor(props){
        super(props);
        state = {
            delivery_start_lat: 0,
            delivery_start_lon: 0,
            delivery_end_lat: 0,
            delivery_end_lon: 0,
            nearest_drivers: []
        }
    }

    degreesToRadians(deg){
        return deg*Math.PI/180
    }

    distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2){
        var earthRadiusKm = 6371;

        var dLat = this.degreesToRadians(lat2 - lat1)
        var dLon = this.degreesToRadians(lon2-lon1);

        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);

        var a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.sin(dLon/2) + Math.sin(dLon/2) + Math.cos(lat1) + Math.cos(lat2);
        var c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return earthRadiusKm*c
    }

    findNearestDrivers(){
        //if driver lat and lon cur is within 20 miles of starting delivery point 
        // and driver lat and lon destination is within 10 miles of ending delivery point, closest driver should be added to the list
        const {
            delivery_start_lat,
            delivery_start_lon,
            delivery_end_lat,
            delivery_end_lon,
            nearest_drivers 
        } = this.state
        for (let i = 0; i < drivers.length; i++){
            if (this.distanceInKmBetweenEarthCoordinates(delivery_start_lat, delivery_start_lon, drivers[i].cur_lat, drivers[i].cur_lon ) < 32 
                && this.distanceInKmBetweenEarthCoordinates(delivery_end_lat, delivery_end_lon, drivers[i].des_lat, drivers[i].des_lon ) < 16){
                    nearest_drivers.push(drivers[i])
                } 
        }
        this.setState({ nearest_drivers: nearest_drivers })
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}