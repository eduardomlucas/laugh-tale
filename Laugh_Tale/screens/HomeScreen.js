import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../firebase'
import styles from '../estilo';

const HomeScreen = () => {

  const navigation = useNavigation()
  //Handle Screens
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