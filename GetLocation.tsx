import React, {useState, useEffect} from 'react'
import { Alert, Text } from 'react-native';
import GetLocation from 'react-native-get-location'

const Location = () => {

    useEffect(async () => {

        try {
            const location = await GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 150000,
            })    
            console.log('Successful: ', location);
            
        } catch (error) {
            const { code, message } = error;
            console.warn(code, message);
            if (code === 'CANCELLED') {
                Alert.alert('Location cancelled by user or by another request');
            }
            if (code === 'UNAVAILABLE') {
                Alert.alert('Location service is disabled or unavailable');
            }
            if (code === 'TIMEOUT') {
                Alert.alert('Location request timed out');
            }
            if (code === 'UNAUTHORIZED') {
                Alert.alert('Authorization denied');
            }
            
        }
    },[])
    return null
}

export default Location