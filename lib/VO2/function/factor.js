'use strict';

module.exports = function(VO2){

    /**
     * Function for calculating the VO2 factor for a given distance.
     * @param {Number} [distance] the distance in meters.
     * @returns {Number}
     */
  VO2.factor = function(distance){
    return VO2.config.defaultMaxFactor * Math.pow(distance / VO2.defaultMaxFactor, 0.07);
  };
};