import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Image } from 'react-native'
import { firestore, firebase, storage} from '../firebase'
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import styles from '../estilo';

const AdicionarScreen = () => {

  const [imageUri, setImageUri] = useState(null);
  const [nomeManga, setNomeManga] = useState('');
  const [nomeAutor, setNomeAutor] = useState('');
  const [nrCapitulo, setNrCapitulo] = useState('');

  const navigation = useNavigation();
  //handle screens
  const handleVoltar=()=>{
      navigation.replace("Lista de Leitura");
  }

  const pickImage = async () => {
      if(nomeManga === "" && nrCapitulo === ""){
          return alert ("Insira o Nome do mangá e número do capítulo antes");
      }
      if(nomeManga === ""){
          return alert('Insira o Nome do mangá antes');
      }
      if(nrCapitulo == ""){
          return alert('Insira o número do capítulo antes');
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
      firestore
      .collection('manga')
      .add({
          nomeManga: nomeManga,
          nomeAutor: nomeAutor,
          nrCapitulo: nrCapitulo
      })
      .then(()=>{
          navigation.replace("Lista de Leitura")
          alert(nomeManga+' Capítulo: '+nrCapitulo+ '\nCadastado com sucesso!');
      })
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={require('../images/logo_.png')} style={styles.logo} />
        <View style={styles.inputContainerAdicionar} >

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
        
        <View style={styles.buttonContainerAdicionar}>

        <TouchableOpacity style={styles.buttonAdicionar}onPress={salvarManga}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBack}onPress={handleVoltar}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  );
};

export default AdicionarScreen;
