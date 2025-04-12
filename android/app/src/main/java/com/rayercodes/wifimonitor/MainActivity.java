package com.rayercodes.wifimonitor;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Register plugins
        registerPlugin(WiFiPlugin.class);
    }
}
