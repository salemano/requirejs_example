/**
 * Created by Sergey on 9/28/2014.
 */
require(["modules/module1/util", ""], function(util) {
    console.log("inside require");
    console.log(app);
    console.log($("#element").text());
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});