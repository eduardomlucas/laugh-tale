import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from '../estilo';
const LerMangaScreen = ({route}) => {
    const { imageUrl } = route.params;
    //consultar no banco com o nome+capitulo
    //colocar o resultado num array de fotos
    //o id vai ser a página
    //controlar pelo id
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text>Leitura</Text>
        </View>
    )
}
export default LerMangaScreen;