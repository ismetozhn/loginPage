import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home')
            }
        })
    }, [])

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Kullanıcı:', user.email)

            }).catch((error) => alert(error.message));
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Kullanıcı giriş yaptı', user.email)

            }).catch((error) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
            <View>
                <Image style={styles.image} source={require('../assets/images/istegelsin.jpg')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput secureTextEntry
                    style={styles.input}
                    placeholder='Şifre'
                    value={password}
                    onChangeText={text => setPassword(text)} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.outlineButton]}>
                    <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        marginTop: 20
    },
    input: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 7,
        borderRadius: 10
    },
    buttonContainer: {
        width: '50%',
        marginTop: 30,

    },
    button: {
        backgroundColor: '#405490',
        padding: 15,
        alignItems: 'center',
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    outlineButton: {
        marginTop: 10,
        backgroundColor: '#ADD8E6'
    },
    outlineButtonText: {
        color: '#405490',
        fontSize: 17,
        fontWeight: 'bold'
    },
    image: {
        borderRadius: 70
    }
})