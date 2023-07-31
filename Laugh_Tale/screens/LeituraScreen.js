import { Text, TouchableOpacity, View, FlatList, Image} from 'react-native'
import { getDataFromFirestore, getPhotosArrayFromStorage } from '../firebase'
import { React, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../estilo'
const LeituraScreen = ({navigation}) => {
  //Handle Screens
  const handleVoltar=()=>{
    navigation.replace("Home")
  }
  const handleAdicionar=()=>{
    navigation.replace("Adicionar")
  }
  const [photoURLs, setPhotoURLs] = useState([]);
  const handleItemPress = async (item) => {
    let aux = item.nomeManga+item.nrCapitulo.trim();
    console.log(aux);
    try {
      getPhotosArrayFromStorage(aux)
      .then((urls) => {
        setPhotoURLs(urls);
      })
      console.log(photoURLs)
      navigation.navigate("Ler Manga", {photoURLs: photoURLs});
    } catch (error) {
      console.error('Erro ao obter imagem:', error);
    }
  }
  //Structure Data
  const [data, setData] = useState([]);
  useEffect(() => {
    getDataFromFirestore('mangas')
      .then((dataArray) => {
        setData(dataArray);
      })
      .catch((error) => {
        console.error('Erro ao obter dados do Firestore:', error);
      });
  }, []);
  //Rendering Items
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.buttonList} onPress={() => handleItemPress(item)}>
      <Text style={styles.buttonListText}>{item.nomeManga+" Cap: "+item.nrCapitulo}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../images/logo_.png')} style={styles.logo} />
      <View style={styles.leituraContainer}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id} />
            <TouchableOpacity
            style={styles.buttonLeitura} onPress={handleAdicionar}>
                <Text style={styles.buttonText}>Adicionar Mangá</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleVoltar}
                style={styles.buttonBack}
            >
                <Text style={styles.buttonText}>VOLTAR</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default LeituraScreen;
