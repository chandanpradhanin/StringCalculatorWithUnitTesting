import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import {add} from './src/utils/CommonFunctions';

const App = () => {
  const [enteredValues, setEnteredValues] = useState('');
  const [outcome, setOutcome] = useState<number | null>(null);

  const handleContinue = () => {
    try {
      const total = add(enteredValues);
      setOutcome(total);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Input here "
        value={enteredValues}
        onChangeText={setEnteredValues}
        multiline={true}
      />
      {outcome !== null && (
        <Text style={styles.result}>Output: {outcome}</Text>
      )}
      </View>
    <TouchableOpacity style={styles.touchable} onPress={handleContinue}>
      <Text style={styles.text}>{'Continue'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  textInputContainer:{
    height:50,
    width:'100%',
    margin:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  touchable:{
    backgroundColor:'green',
    height:50,
    padding: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
