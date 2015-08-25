window.addEventListener("load", function () {
    console.log("COMPLETE load!!");
    var eleBatteryInfo = document.getElementById("battery-info");
    var testText = "testtesttest";

    eleBatteryInfo.textContent = testText;
    eleBatteryInfo.innerHTML = "hell";
}, false);

window.addEventListener("deviceready", function () {
    console.log("COMPLETE deviceready!!");
}, false);


window.addEventListener("batterystatus", function showBatteryStatus(info) {
    console.log("ここまでは来たyo");
    var eleBatteryInfo = document.getElementById("battery-info");
    var testText = "testtesttest2";

    eleBatteryInfo.textContent = testText;

    if (info.isPlugged === true) {
        var chargingTxt = "ON";
    } else {
        var chargingTxt = "OFF";
    }
    eleBatteryInfo.innerHTML = "Battery Level :" + info.level + " (" + chargingTxt + ")";
    console.log = "Battery Level :" + info.level + " (" + chargingTxt + ")";
}, false);
