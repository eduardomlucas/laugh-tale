import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView } from 'react-native'
import { auth, firestore, firebase, storage} from '../firebase'
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


const TesteScreen = () => {
    const [imageUri, setImageUri] = useState(null);
    const [nomeManga, setNomeManga] = useState('')
    const [nomeAutor, setNomeAutor] = useState('') 
    const [nrCapitulo, setNrCapitulo] = useState('')

    const pickImage = async () => {
        if(nomeManga === "" && nrCapitulo === ""){
            return alert ("Insira o Nome do mangá e número do capítulo antes")
        }
        if(nomeManga === ""){
            return alert('Insira o Nome do mangá antes')
        }
        if(nrCapitulo == ""){
            return alert('Insira o número do capítulo antes')
        }

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        if (!result.canceled) {
          setImageUri(result.uri);
          uploadImage(result.uri);
        }
      };
    
      const uploadImage = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = storage.ref().child('mangas/'+nomeManga+nrCapitulo);
        await ref.put(blob);
        const url = await ref.getDownloadURL();
        // Salvar o URL da imagem no Firestore
        const db = firebase.firestore();
        db.collection('images').add({ url });
      };

    const navigation = useNavigation()

    const handleVoltar=()=>{
        navigation.replace("Lista de Leitura")
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

        firestore
        .collection('manga')
        .add({
            nomeManga: nomeManga,
            nomeManga: nomeAutor,
            nrCapitulo: nrCapitulo
        })
        .then(()=>{
            navigation.replace("Lista de Leitura")
            alert(nomeManga+'Capítulo: '+nrCapitulo+ '\nCadastado com sucesso!');
        })
    }
  return (
    <KeyboardAvoidingView style={styles.container}>
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
                <TouchableOpacity 
            style={[styles.button, styles.buttonOutline]} 
            onPress={pickImage}>
        
          <Text style={styles.buttonOutlineText}>Selecionar Mangá</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}onPress={salvarManga}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBack}onPress={handleVoltar}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};

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
        marginTop: 5,
      },
    buttonOutline: {
      backgroundColor: 'white',
      borderColor: '#8F43EE',
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
      color: '#8F43EE',
      fontWeight: '700',
      fontSize: 16,
    },
  })
  

export default TesteScreen;
