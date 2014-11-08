/**
 * Convert a float to a string with currency formatting. (e.g. xx,xxx.xx)
 * @param  {float} method
 */
PolymerExpressions.prototype.money = function (val) {
    return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};