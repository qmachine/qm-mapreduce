//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 10 May 2014
//                                                  ~~ last updated 11 May 2014

(function (global) {
    'use strict';

 // Pragmas

    /*global */

    /*jshint maxparams: 1, quotmark: single, strict: true */

    /*jslint indent: 4, maxlen: 80 */

    /*properties
        box, clearTimeout, console, dt, error, exit, getPrototypeOf,
        hasOwnProperty, key, log, on, Q, QM, setInterval, setTimeout, volunteer
    */

 // Prerequisites

    if ((global.console instanceof Object) === false) {
        throw new Error('Developer console is not available.');
    }

    if ((typeof global.console.error !== 'function') ||
            (typeof global.console.log !== 'function')) {
        throw new Error('Developer console is weird.');
    }

    if (global.hasOwnProperty('QM') === false) {
        throw new Error('QMachine has not been loaded.');
    }

    if (Object.hasOwnProperty('getPrototypeOf') === false) {
        throw new Error('ES5 is not supported. This is gonna get ugly.');
    }

    if (Object.getPrototypeOf(global).hasOwnProperty('setInterval') === false) {
        throw new Error('The `setInterval` method is missing.');
    }

    if (Object.getPrototypeOf(global).hasOwnProperty('setTimeout') === false) {
        throw new Error('The `setTimeout` method is missing.');
    }

 // Declarations

    var config, qm;

 // Definitions

    config = {
        box: 'mapreduce-testpage',      //- will be assigned to `QM.box`
        dt: 1000                        //- polling interval, in milliseconds
    };

    qm = global.QM;

 // Prototype definitions

 // Out-of-scope definitions

    qm.box = config.box;

 // Invocations

    (function () {

        var timeout = null;

        (function f() {
         // This function sets up a nice, steady asynchronous volunteer :-)
            global.clearTimeout(timeout);
            qm.volunteer().on('error', function (message) {
             // This function needs documentation.
                if (message === 'Nothing to do ...') {
                    global.console.log(message);
                } else {
                    global.console.error(message);
                }
                timeout = global.setTimeout(f, config.dt);
                return;
            }).Q(function (evt) {
             // This function needs documentation.
                global.console.log('Done: ' + this.key);
                timeout = global.setTimeout(f, config.dt);
                return evt.exit();
            });
            return;
        }());

        return;

    }());

 // That's all, folks!

    return;

}(Function.prototype.call.call(function (that) {
    'use strict';

 // See "mapreduce.js" for explanation.

    /*global global: false */
    /*jslint indent: 4, maxlen: 80 */
    /*properties global */

    if (this === null) {

     // Strict mode has captured us, but we already passed a reference :-)

        return (typeof global === 'object') ? global : that;

    }

 // Strict mode isn't supported in this environment, but we need to make sure
 // we don't get fooled by Rhino's `global` function.

    return (typeof this.global === 'object') ? this.global : this;

}, null, this)));

//- vim:set syntax=javascript:
