#!/bin/bash

INTERFACE="wlp0s20f3"
INTERVAL=1

while true; do
    RAW=$(iw dev "$INTERFACE" link)
    SIGNAL=$(echo "$RAW" | grep 'signal:' | awk '{print $2}')
    SSID=$(echo "$RAW" | grep 'SSID:' | cut -d ' ' -f2-)
    TIMESTAMP=$(date +"%H:%M:%S")

    echo "{\"timestamp\":\"$TIMESTAMP\",\"ssid\":\"$SSID\",\"signal\":$SIGNAL}"
    sleep $INTERVAL
done
