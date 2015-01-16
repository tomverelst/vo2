'use strict';

var math = require("mathjs");

/**
 * VO2.js factory function.
 *
 * @param {Object} [options] Available options:
 *                            {Number} defaultMaxFactor
 *                              The default factor for calculating the VO2 max. Default is 3.111, which is
 *                              the factor for 3000 meters.
 *                            {Number} standardMaxDistance
 *                              The default distance for calculating the VO2 max. Default is 3000 meters.
 */
function create(config) {
    // simple test for ES5 support
    if (typeof Object.create !== 'function') {
        throw new Error('ES5 not supported by this JavaScript engine. ' +
        'Please load the es5-shim and es5-sham library for compatibility.');
    }

    // create namespace
    var VO2 = {};

    // create configuration options. These are private
    var _config = {
        // VO2 max factor for 3000 meters
        defaultMaxFactor: 3.111,
        defaultMaxDistance: 3000
    };

    /**
     * Set configuration options for VO2.js, and get current options
     * @param {Object} [options] Available options:
     *                            {Number} defaultMaxFactor
     *                              The default factor for calculating the VO2 max. Default is 3.111, which is
     *                              the factor for 3000 meters.
     *                            {Number} standardMaxDistance
     *                              The default distance for calculating the VO2 max. Default is 3000 meters.
     * @return {Object} Returns the current configuration
     */
    VO2.config = function (options) {
        if (options) {
            object.deepExtend(_config, options);
        }

        // return a clone of the settings
        return object.clone(_config);
    };

    /**
     * VO2.js factory function. Creates a new instance of VO2.js
     *
     * @param {Object} [options] Available options:
     *                            {Number} defaultMaxFactor
     *                              The default factor for calculating the VO2 max. Default is 3.111, which is
     *                              the factor for 3000 meters.
     *                            {Number} standardMaxDistance
     *                              The default distance for calculating the VO2 max. Default is 3000 meters.
     */

    VO2.create = create;

    // apply provided configuration options
    VO2.config(_config); // apply the default options
    VO2.config(config);  // apply custom options

    return VO2;
}
// create a default instance of VO2.js
var VO2 = create();

// export the default instance
module.exports = VO2;

