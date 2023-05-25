import { Text } from "@rneui/base";
import React, {useState} from "react";
import { View, StyleSheet, Image } from "react-native";
import FormControl from "../component/FormControl";
import ButtonControl from "../component/ButtonControl";
import { ApiManager } from "../api/ApiManager";
import { routeApi, sessionKey } from "../util/Helper";
import { Storage } from "../util/Storage";
import MessageUtil from "../util/MessageUtil";

const Login = ({navigation, route}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    const changeUsername = (txt) => {
        setUsername(txt);
    }

    const changePassword = (txt) => {
        setPassword(txt);
    }

    const changeSecure = () => {
        setSecureText(!secureText);
    }

    const submitLogin = async () => {
        let params = {
            "username": username,
            "password": password
        }

        const res = await ApiManager('post', params, routeApi.login);
        let status = res.metadata.status,
            message = res.metadata.message,
            response = res.response;

        if( status === 200){
            Storage.StoreAsObject(sessionKey, response);
            MessageUtil.showSuccess(message);
            navigation.replace('Home');
        } else {
            MessageUtil.showFailed(message);
        } 
    }
    
    return(
        <View>
            <View style={style.textContainer}>
                {/* <Text style={style.text}>SPlash babi</Text> */}
                <Image source={{uri: "https://images.unsplash.com/photo-1611162618828-bc409f073cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}} 
                    style={{width: 100, height: 100}}
                />
            </View>
            <FormControl placeholder={"isi Username"} 
                value={username} 
                secureText={false} 
                isSecure={false} 
                changeValue={ (txt) => changeUsername(txt) }    
                changeSecure={ () => {} }
            />
            <FormControl placeholder={"isi Username"} 
                value={password} 
                secureText={secureText} 
                isSecure={true} 
                changeValue={ (txt) => changePassword(txt) }
                changeSecure={changeSecure}
                    
            />

            <ButtonControl 
                label="Login Bos" 
                textColor="black" 
                backgroundColor="blue" 
                marginStart={24} 
                marginEnd={24}
                onPress={ () => {
                    // navigation.replace("Home");
                    submitLogin();
                } }   
            />
            
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
    textContainer: { 
        marginTop: "30%",
        justifyContent: "center", alignItems: "center", alignSelf: "center" }
})
export default Login;