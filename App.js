import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState('');
  const [classification, setClassification] = useState('');

  const calculateIMC = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (weightValue && heightValue) {
      const calculatedIMC = weightValue / (heightValue * heightValue);
      setIMC(calculatedIMC.toFixed(2));

      if (calculatedIMC < 18.5) {
        setClassification('Abaixo do peso');
      } else if (calculatedIMC >= 18.5 && calculatedIMC < 24.9) {
        setClassification('Peso normal');
      } else if (calculatedIMC >= 25 && calculatedIMC < 29.9) {
        setClassification('Sobrepeso');
      } else if (calculatedIMC >= 30 && calculatedIMC < 34.9) {
        setClassification('Obesidade grau I');
      } else if (calculatedIMC >= 35 && calculatedIMC < 40) {
        setClassification('Obesidade grau II');
      } else {
        setClassification('Obesidade grau III ou mórbida');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo do IMC</Text>
      <Image source={require('./assets/imc.jpg')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateIMC}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
      <Text style={[styles.result, { color: 'red' }]}>Classificação: {classification}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
