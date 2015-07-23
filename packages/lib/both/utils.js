/**
 * A global namespace for Violet.utils
 * Containss global utility methods.
 * @namespace Violet.utils
 */
Violet.utils = {};

Violet.utils.formatDate = function (rawDate) {
  return moment(rawDate).format('YYYY MMM DD');
};
