//- JavaScript source code

//- tests.js ~~
//                                                      ~~ (c) SRW, 10 May 2014
//                                                  ~~ last updated 10 May 2014

(function (global) {
    'use strict';

 // Pragmas

    /*global */

    /*jshint maxparams: 1, quotmark: single, strict: true */

    /*jslint indent: 4, maxlen: 80 */

    /*properties */

 // Prerequisites

    if (global.hasOwnProperty('QM') === false) {
        throw new Error('QMachine has not been loaded.');
    }

 // Declarations

 // Definitions

 // Prototype definitions

 // Out-of-scope definitions

 // Demonstrations

    (function () {

     // (placeholder)

        return;

    }());

 // That's all, folks!

    return;

}(Function.prototype.call.call(function (that) {
    'use strict';

 // See "https://www.qmachine.org/q.js" for explanation.

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
