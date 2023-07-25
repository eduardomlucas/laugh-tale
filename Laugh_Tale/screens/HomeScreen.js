import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { auth, firestore, firebase } from '../firebase'

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

  const handleLeitura =()=>{
      navigation.replace("Lista de Leitura")
  }
  const handleCriar=()=>{
    navigation.replace("Criar")
  }

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo_.png')} style={styles.logo} />
      <Text style={styles.headerText}>LAUGH TALE</Text>
      {/* redireciona para outro menu */}
      <TouchableOpacity
        onPress={handleLeitura}
        style={styles.button}
      >
        <Text style={styles.buttonText}>COMEÇE A LER!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCriar}
        style={styles.button}
      >
        <Text style={styles.buttonText}>CRIE SEU MANGÁ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.buttonLogout}
      >
        <Text style={styles.buttonText}>Sair</Text>
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
  logo: {
    width: 130,
    height: 100,
  },
  button: {
    backgroundColor: '#8F43EE',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonLogout: {
    backgroundColor: '#EB1D36',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 250,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  headerText: {
    color: '#2B2730',
    fontWeight: '100',
    fontSize: 40,
  },
})
