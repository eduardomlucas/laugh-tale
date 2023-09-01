import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core'
import { Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import { firestore} from '../firebase'
import styles from '../estilo';

const CriarScreen = () => {
    const navigation = useNavigation();

    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.buttonContainerLeitura}>
        <TouchableOpacity 
            style={[styles.button, styles.buttonOutlineLeitura]}>
          <Text style={styles.buttonOutlineText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.buttonOutlineLeitura]}>
          <Text style={styles.buttonOutlineText}>Descartar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.buttonOutlineLeitura]}>
          <Text style={styles.buttonOutlineText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boardContainer}>

        </View>
        <View style={styles.buttonContainerLeitura}>
          <TouchableOpacity 
            style={[styles.button, styles.buttonOutlineLeitura]}>
          <Text style={styles.buttonOutlineText}>Persongem</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={[styles.button, styles.buttonOutlineLeitura]}>
            <Text style={styles.buttonOutlineText}>Falas</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={[styles.button, styles.buttonOutlineLeitura]}>
            <Text style={styles.buttonOutlineText}>Painéis</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

export default CriarScreen;