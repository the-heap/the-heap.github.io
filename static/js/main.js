/**
 * Dom Styling with JS
 * Dom Manipulation
 *
 *
 * Helpers
 */


// Dom Styling
var x = els(".Nav-item")
console.log(x)





// Helpers
function els(selector) {
  return [].slice.call(document.querySelectorAll(selector));
}
