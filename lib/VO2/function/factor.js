'use strict';

module.exports = function(VO2, _config){

    /**
     * Function for calculating the VO2 factor for a given distance.
     * @param {Number} [distance] the distance in meters.
     * @returns {Number}
     */
  VO2.factor = function(distance){
    return _config.defaultMaxFactor * Math.pow(distance / _config.defaultMaxDistance, 0.07);
  };
};