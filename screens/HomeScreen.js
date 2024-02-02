import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate('Login')
      })
      .catch((error) => alert(error.message));

  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: '#405490',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    width: '60%',
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
})