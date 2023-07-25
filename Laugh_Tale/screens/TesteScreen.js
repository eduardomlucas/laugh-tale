import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, PanResponder } from 'react-native';

const TesteScreen = () => {
  const [brushColor, setBrushColor] = useState('black');
  const canvasRef = useRef();

  const handlePanResponderMove = (event) => {
    const { pageX, pageY } = event.nativeEvent;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.lineTo(pageX, pageY);
    ctx.stroke();
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderStart: (event) => {
        const { pageX, pageY } = event.nativeEvent;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(pageX, pageY);
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View
        style={{ flex: 1 }}
        {...panResponder.panHandlers}
      >
        <canvas
          ref={canvasRef}
          style={styles.canvas}
          width={300}
          height={500}
        />
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => setBrushColor('red')}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => setBrushColor('blue')}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => setBrushColor('green')}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => setBrushColor('yellow')}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'black' }]}
          onPress={() => setBrushColor('black')}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={handleClearCanvas}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  canvas: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
});

export default TesteScreen;
