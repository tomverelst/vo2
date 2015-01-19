'use strict';

module.exports = function(VO2, _config){

    /**
     * Function for calculating the VO2 factor for a given distance.
     * @param {Number} [distance] the distance in meters.
     * @returns {Number}
     */
  VO2.factor = function(distance){
<<<<<<< HEAD
    return _config.defaultMaxFactor * Math.pow(distance / _config.defaultMaxDistance, 0.07);
=======
    return VO2.config.defaultMaxFactor * Math.pow(distance / VO2.defaultMaxDistance, 0.07);
>>>>>>> e208ef0f1e796564928a715cd4f49ea33bdcfdf9
  };
};
