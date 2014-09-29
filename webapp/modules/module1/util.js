/**
 * Created by Sergey on 9/28/2014.
 */
define(['jquery'], function() {
    console.log("Utils is loaded");
    return {
        start: getSomeValue
    };

    function getSomeValue() {
        console.log('util.start():: ', $("#element").text());
        return 14;
    }
});