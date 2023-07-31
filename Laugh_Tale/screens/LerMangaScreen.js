import { React, useState} from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from '../estilo';

const LerMangaScreen = ({route}) => {

    const {photoURLs} = route.params;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const nextPage =  () => {
        if (currentImageIndex < photoURLs.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }
    const previousPage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerLeitura}>
            <Image source={{uri: photoURLs[currentImageIndex]}} style={styles.image} />
            </View>
            <View style={styles.buttonContainerLeitura}>
            <TouchableOpacity 
              style={[styles.button, styles.buttonOutlineLeitura]} 
              onPress={previousPage}>
            <Text style={styles.buttonOutlineText}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={[styles.button, styles.buttonOutlineLeitura]} 
              onPress={nextPage}>
            <Text style={styles.buttonOutlineText}>Próxima</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}
export default LerMangaScreen;