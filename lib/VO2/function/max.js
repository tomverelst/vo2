'use strict';

module.exports = function (VO2){

    /**
     * Function for calculating the VO2 max for a given time (in seconds)
     * and distance (in meters).
     * @param {Number} [time] time in seconds
     * @param {Number} [distance] distance in meters
     */
    VO2.max = function(time, distance){

        if(typeof(time) !== "number"){
            throw new Error("time parameter must be a number");
        }
        if(time <= 0){
            throw new Error("time parameter must be greater than zero");
        }
        if(typeof(distance) !== "number"){
            throw new Error("distance parameter must be a number");
        }
        if(distance <= 0){
            throw new Error("distance parameter must be greater than zero");
        }

        var timeH = time / 3600;

        var velocity = distance / timeH / 1000;

        return velocity * VO2.factor(distance);
    };

};