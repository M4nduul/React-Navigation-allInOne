import React from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { ActivityIndicator, StyleSheet } from 'react-native';

const GetCamera = () => {
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back

    console.log('DEVICES: =======',devices);
    
    if (device == null) return <ActivityIndicator size='large' style={StyleSheet.absoluteFill}/>
    return (
        <Camera 
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        />
    )
    
}
export default GetCamera