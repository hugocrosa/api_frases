window.onload = function () {
    'use strict';
    var millisecondsBeforeRefresh = 30000; //Adjust time here
    window.setTimeout(function () {
        //refresh the entire document
        document.location.reload();
    }, millisecondsBeforeRefresh);
};