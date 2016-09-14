/**
 * Created by 2shob on 9/14/2016.
 */
var number = 0;
$('td').hover(
    function() {
        $(this).addClass("hover");
    },
    function() {
        $(this).removeClass("hover");
    }
);
$('td').click(function() {
    if (number < 9) {
        if (number % 2 === 0) {
            $(this).addClass("x");
        } else {
            $(this).addClass("o");
        }
        number++;
    }
});