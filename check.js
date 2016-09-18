/**
 * Created by 2shob on 9/17/2016.
 */
var check = function() {
    if ($("#r1c1").hasClass(turn) && $("#r1c2").hasClass(turn) && $("#r1c3").hasClass(turn)) {
        return true;
    } else if ($("#r2c1").hasClass(turn) && $("#r2c2").hasClass(turn) && $("#r2c3").hasClass(turn)) {
        return true;
    } else if ($("#r3c1").hasClass(turn) && $("#r3c2").hasClass(turn) && $("#r3c3").hasClass(turn)) {
        return true;
    } else if ($("#r1c1").hasClass(turn) && $("#r2c1").hasClass(turn) && $("#r3c1").hasClass(turn)) {
        return true;
    } else if ($("#r1c2").hasClass(turn) && $("#r2c2").hasClass(turn) && $("#r3c2").hasClass(turn)) {
        return true;
    } else if ($("#r3c1").hasClass(turn) && $("#r3c2").hasClass(turn) && $("#r3c3").hasClass(turn)) {
        return true;
    } else if ($("#r1c1").hasClass(turn) && $("#r2c2").hasClass(turn) && $("#r3c3").hasClass(turn)) {
        return true;
    } else if ($("#r3c1").hasClass(turn) && $("#r2c2").hasClass(turn) && $("#r1c3").hasClass(turn)) {
        return true;
    }
    return false;
};