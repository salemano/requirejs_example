/**
 * Created by Sergey on 9/28/2014.
 */
define(['util'], function(util) {
    console.log("Inside writer");
    return{
        write: write
    };

    function write() {
        var a = util.start();
        console.log("Result of calculation: " + a + "+10 = ", a + 10);
    }
});