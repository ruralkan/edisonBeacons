/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

/*
The BLE - iBeacon Node.js sample application distributed within Intel® XDK IoT Edition under the IoT with Node.js Projects project creation option showcases how to advertise it's presence as a BLE ibeacon via Bluetooth Low Energy (BLE) communication.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.
Steps for installing/updating MRAA & UPM Library on Intel IoT Platforms with IoTDevKit Linux* image
Using a ssh client: 
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade
OR
In Intel XDK IoT Edition under the Develop Tab (for Internet of Things Embedded Application)
Develop Tab
1. Connect to board via the IoT Device Drop down (Add Manual Connection or pick device in list)
2. Press the "Settings" button
3. Click the "Update libraries on board" option

Review README.md file for more information about enabling bluetooth and completing the desired configurations.


*/

var noble = require('noble');
console.log('noble');
noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});
noble.on('discover', function(peripheral){
         var macAddress = peripheral.uuid;
         var rss = peripheral.rssi;
         var localName = peripheral.advertisement.localName;
         console.log('found device:', macAddress,' ', localName, ' ', rss);
         });