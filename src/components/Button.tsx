import React from "react";
import { Alert, Pressable, Text, View } from "react-native";

type Props = {
    text: string
    color: string
}

const Button = ({text, color}: Props) => {
    return (
        <Pressable style={{backgroundColor: color, borderRadius: 8, padding: 8}} onPress={()=> Alert.alert('Clicked')}>
            <Text style={{fontWeight: 'bold', color:'#fff'}}>{text}</Text>
        </Pressable>
    )
}

export default Button