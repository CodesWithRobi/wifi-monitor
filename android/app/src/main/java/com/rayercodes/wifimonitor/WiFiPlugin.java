package com.yourname.yourapp;

import android.content.Context;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "WiFi")
public class WiFiPlugin extends Plugin {
    
    @PluginMethod
    public void getSignalStrength(PluginCall call) {
        try {
            WifiManager wifiManager = (WifiManager) getContext().getSystemService(Context.WIFI_SERVICE);
            WifiInfo wifiInfo = wifiManager.getConnectionInfo();
            
            int rssi = wifiInfo.getRssi();
            int linkSpeed = wifiInfo.getLinkSpeed();
            String ssid = wifiInfo.getSSID();
            
            JSObject ret = new JSObject();
            ret.put("rssi", rssi);
            ret.put("linkSpeed", linkSpeed);
            ret.put("ssid", ssid);
            
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Error getting WiFi information", e);
        }
    }
}
