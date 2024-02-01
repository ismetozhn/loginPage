import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function LoginScreen() {
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        >
            <View>
                <Image style={styles.image} source={require('../assets/images/istegelsin.jpg')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Şifre' />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.outlineButton]}>
                    <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'80%',
        marginTop:20
    },
    input:{
        backgroundColor:'white',
        paddingVertical:10,
        paddingHorizontal:10,
        marginTop:7,
        borderRadius:10
    },
    buttonContainer:{
        width:'50%',
        marginTop:30,
       
    },
    button:{
        backgroundColor:'#405490',
        padding:15,
        alignItems:'center',
        borderRadius:20
    },
    buttonText:{
        color:'white',
        fontSize:17,
        fontWeight:'bold'
    },
    outlineButton:{
        marginTop:10,
        backgroundColor:'#ADD8E6'
    },
    outlineButtonText:{
        color:'#405490',
        fontSize:17,
        fontWeight:'bold'
    },
    image:{
        borderRadius:70
    }
})