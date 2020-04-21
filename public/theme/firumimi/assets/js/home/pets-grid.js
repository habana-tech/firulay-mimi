//const myLocalModule = require('../../../../../../node_modules/proximity-effect/src/ProximityEffect');
import ProximityEffect from '../animations/ProximityEffect';
// var pe = require('proximity-effect/src/ProximityEffect');
// var pe1 = require('proximity-effect/dist/ProximityEffect.min');

console.log(ProximityEffect);

let elements = document.querySelectorAll("div.pets-grid-item img"); // requires NodeList

let params = {
   attack:           .15, // [0<=n>=1] rate of change when approaching, 1=full speed 0=no movement
   decay:            .2, // [0<=n>=1] rate of change when receding, 1=full speed 0=no movement
   invert:       false, // [Boolean] swap near and far distances
   threshold:        80, // [n>=0] minimum distance (from element's mathematical centre) before effect starts
   runoff:         150, // [n>=0] distance over which styles are interpolated
   direction:   'both', // 'both' | 'horizontal' | 'vertical'
   FPS:             30, // [n>0] 'enterframe' mode only, up to refresh rate
   distance:  80,
};

let myEffect = new ProximityEffect(elements, params);

// myEffect.addEffect('opacity', 1,  0.5);
myEffect.addEffect('scale',   1.15,  1.0);
// myEffect.addEffect('blur',    0, 5);


// myEffect.addEffect('translateX', 0, {value: 50, scatter: 15});
// myEffect.addEffect('translateY', 0, {value: 50, scatter: 15});
// myEffect.addEffect('padding', {value: 20, scatter: 30}, {value: 100, scatter: 50}, {rule: 'padding', unit: 'px'});