import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth, firestore } from '../firebase'


const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const handleTest =()=>{
      navigation.replace("Test")
  }
  
  const verificaNameUser = ()=>{
    var nome = firestore.collection('books').where(firebase.firestore.usuario('email'), '==', auth.currentUser?.email ).get('firstName')
    if(1==1){
      console.log(nome);
    }
    return nome;
  }
  return (
    <View style={styles.container}>
      <Text>Bem Vindo! {verificaNameUser()}</Text>
      {/* redireciona para a tela de login */}
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.buttonLogout}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
      {/* redireciona para outro menu */}
      <TouchableOpacity
        onPress={handleTest}
        style={styles.button}
      >
        <Text style={styles.buttonText}>COMEÇE A LER!</Text>
      </TouchableOpacity>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonLogout: {
    backgroundColor: '#EB1D36',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
