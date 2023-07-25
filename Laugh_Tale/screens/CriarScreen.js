import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { auth, firestore, firebase, storage} from '../firebase'

const CriarScreen = () => {
    const navigation = useNavigation();
    
    const [imageUri, setImageUri] = useState(null);
    const [nomeManga, setNomeManga] = useState('')
    const [nomeAutor, setNomeAutor] = useState('') 
    const [nrCapitulo, setNrCapitulo] = useState('')

    const handleVoltar=()=>{
        navigation.replace("Home")
    }
    
    const salvarManga=()=>{
        if(nomeManga === "" && nrCapitulo === ""){
            return alert ("Insira o Nome do mangá e número do capítulo antes")
        }
        if(nomeManga === ""){
            return alert('Insira o Nome do mangá antes')
        }
        if(nrCapitulo == ""){
            return alert('Insira o número do capítulo antes')
        }
        console.log("salvando mangá")
        navigation.replace("Teste")
        firestore
        .collection('manga')
        .add({
            nomeManga: nomeManga,
            nomeManga: nomeAutor,
            nrCapitulo: nrCapitulo
        })
        .then(()=>{
            navigation.replace("Teste")
            alert(nomeManga+'Capítulo: '+nrCapitulo+ '\nCadastado com sucesso!');
        })
    }

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer} >
        <TextInput
          placeholder="Nome do Mangá / HQ"
          value={nomeManga}
          onChangeText={text => setNomeManga(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Autor"
          value={nomeAutor}
          onChangeText={text => setNomeAutor(text)}
          style={styles.input}
        />
        
        <TextInput
          placeholder="Capítulo"
          value={nrCapitulo}
          onChangeText={text => setNrCapitulo(text)}
          style={styles.input}
        />
        </View>
        
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}onPress={salvarManga}>
          <Text style={styles.buttonText}>Iniciar Criação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBack}onPress={handleVoltar}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }

export default CriarScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
        backgroundColor: '#8F43EE',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
      },
    buttonOutline: {
      backgroundColor: 'white',
      borderColor: '#0782F9',
      borderWidth: 2,
      width: '100%',
      marginBottom: 5
    },
    buttonBack: {
        backgroundColor: '#2B2730',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,
      },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })
  