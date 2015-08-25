/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
window.addEventListener("load", function endLoad3() {
    console.log("COMPLETE load3!!");
    var eleBatteryInfo = document.getElementById("battery-info");
    var testText = "test-load3";
}, false);

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners  : HTMLが全て読み込まれるまで待機
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent("load");


        // Application Constructor
        initialize: function initFunc() {
            this.bindEvents();
            // Bind Event Listeners  : HTMLが全て読み込まれるまで待機
            //
            // Bind any events that are required on startup. Common events are:
            // 'load', 'deviceready', 'offline', and 'online'.
            bindEvents: function hoge1() {
                document.addEventListener("load", this.onDeviceReady, false);
            };
            // deviceready Event Handler
            //
            // The scope of 'this' is the event. In order to call the 'receivedEvent'
            // function, we must explicitly call 'app.receivedEvent(...);'

            function endLoad2() {
                console.log("COMPLETE load!!");
                var eleBatteryInfo = document.getElementById("battery-info");
                var testText = "test-load2";
                eleBatteryInfo.textContent = testText;
            };

            onDeviceReady: function doDevice() {
                app.receivedEvent("load");

                function endLoad() {
                    console.log("COMPLETE load!!");
                    var eleBatteryInfo = document.getElementById("battery-info");
                    var testText = "testtesttest";
                    eleBatteryInfo.textContent = testText;

                    eleBatteryInfo.textContent = testText;
                    eleBatteryInfo.innerHTML = "hell";
                };

                window.addEventListener("load", function () {
                    console.log("COMPLETE deviceready!!");
                }, false);


                window.addEventListener("load", function showBatteryStatus(info) {
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
            };


        };
        // Update DOM on a Received Event
        /*
            receivedEvent: function (id) {
                var parentElement = document.getElementById(id);
                var listeningElement = parentElement.querySelector('.listening');
                var receivedElement = parentElement.querySelector('.received');

                listeningElement.setAttribute('style', 'display:none;');
                receivedElement.setAttribute('style', 'display:block;');

                console.log('Received Event: ' + id);
            }

        */

    }
};

app.initialize();
