import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native'
import { auth} from '../firebase'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const LeituraScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
    const handleVoltar=()=>{
        navigation.replace("Home")
    }
    const handleAdicionar=()=>{
        navigation.replace("Adicionar")
    }

    const data = [
        { id: '1', name: 'One Piece - Cap: 1001' },
        { id: '2', name: 'Naruto - Cap: 40' },
        { id: '3', name: 'Dragon Ball Z - Cap: 5' },
        { id: '4', name: 'Boku no Hero - Cap: 1' },
        { id: '5', name: 'Beastars - Cap: 20' },
        { id: '6', name: 'Code Geas - Cap: 2'},
        { id: '7', name: 'Jojo Bizarre\'s' +' Adventure - Cap: 56'}
    ];
    handleEntrarManga = (id)=>{
        console.log(id);
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={handleEntrarManga(item.id)}
            style={styles.buttonList}
        >
            <Text style={styles.buttonListText}>{item.name}</Text>
        </TouchableOpacity>
    );

  return (
    <SafeAreaView style={styles.container}>
        
      <View style={styles.buttonContainer}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id} />
            <TouchableOpacity
            style={styles.button} onPress={handleAdicionar}>
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

export default LeituraScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer:{
    width: '80%'
  },
   button: {
    backgroundColor: '#8F43EE',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonList:{
    backgroundColor: '#EDE4FF',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonListText:{
    color: '#2B2730',
      fontWeight: '700',
      fontSize: 16,
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
    color: '#2B2730',
    fontWeight: '700',
    fontSize: 16,
  },
})
