import React from "react";
import { Text, View } from 'react-native';
import { PaperProvider } from "react-native-paper";
import { Avatar, Button } from 'react-native-paper';
import { Style } from "react-native-paper/lib/typescript/components/List/utils";
import { style } from "./style";

export default function Inicial (){
    return (
        <View style={style.container}>
            {/* Círculo */}
            <Avatar.Icon size={120} icon="account" />
        </View>
    )
}