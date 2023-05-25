import {  Text } from "@rneui/themed";
import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { sessionKey } from "../util/Helper";
import { Storage } from "../util/Storage";



const Splash = ({navigation, route}) => {
    const redirectHome = async () => {
        let sesi = Storage.GetAsObject(sessionKey);
        if(sesi != null || sesi != undefined){
            navigation.replace("Home");
        } else {
            navigation.replace("Login");
        }
    }
    
    const timeout = () => {
        setTimeout(() => {
            redirectHome();
        }, 3000)
    }


    useEffect( () => {
        timeout();
    }, [])
    return(
        <View style={style.container}>
            <View style={style.textContainer}>
                {/* <Text style={style.text}>SPlash babi</Text> */}
                <Image source={{uri: "https://images.unsplash.com/photo-1611162618828-bc409f073cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}} 
                    style={{width: 100, height: 100}}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    text: {fontSize: 12, fontWeight: "normal" },
    textContainer: { justifyContent: "center", alignItems: "center", alignSelf: "center" }
})

export default Splash;