window.addEventListener("batterystatus", showBatteryStatus, false);

function onBatteryStatus(info) {
    console.log("ここまでは来た");
    var eleBatteryInfo = document.getElementById("battery-info");
    var testText = "testtesttest";

    eleBatteryInfo.textContent = testText;

    //        eleBatteryInfo.innerHTML = "Battery Level : (";
    //        if (info.isPlugged === true) {
    //            eleBatteryInfo.innerHTML += "ON";
    //        } else {
    //            eleBatteryInfo.innerHTML += "OFF";
    //        }
    //        eleBatteryInfo.innerHTML += ")";
    //    }
};
