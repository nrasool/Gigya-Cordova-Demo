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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        alert(" remote page ready!");
        gigyaClient.init('3_7HHB_3iZ2W4kNFhS6eh5EIEjbasFEyvU0mkvhJjAVsHKRy_oTaIzZRj5nrAnTiwc', 'us1.gigya.com');
        console.log(gigyaClient.getVersion());
        gigyaClient.addEventListener(gigyaClient.Event.LOGIN, function() {
        console.log('Gigya login detected');
    	});
    	gigyaClient.addEventListener(gigyaClient.Event.LOGOUT, function() {
    	console.log('Gigya logout detected');
    });

    //Login button
    function doLogin() {
        gigyaClient.showPlugin('accounts.screenSet',
            {
                screenSet:'Default-RegistrationLogin',
                deviceType:'mobile'
            });
    }
    document.getElementById('btnRaasLogin').onclick = doLogin;

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
