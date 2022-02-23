import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { vw, vh } from 'react-native-viewport-units';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { Clipboard } from '@react-native-community/clipboard';
import { Encrypt, Decrypt } from './hexEncryptor';

export default function App() {
  let [EncryptValue, SetEncryptValue] = useState("");
  let [DecryptValue, SetDecryptValue] = useState("");

  function ValueChangeEncrypt(input)
  {
    let einput = Encrypt(input);
    if (einput) SetEncryptValue(einput);
  }
  function ValueChangeDecrypt(input)
  {
    let dinput = Decrypt(input);
    if (dinput) SetDecryptValue(dinput);
  }
  let CopyStrE = async () =>
  {
    Clipboard.setString(EncryptValue);
  }
  let CopyStrD = async () =>
  {
    Clipboard.setString(DecryptValue);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <SafeAreaView>
          <Text style={styles.title}>Heksaszyfrer</Text>
        </SafeAreaView>
      </View>
      <SafeAreaView style={styles.content}>
        <View>
          <Text style={styles.text}>a =&gt; xx</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => CopyStrE}><Icon name="content-copy" size={30} style={styles.icon}/></TouchableOpacity>
            <TextInput autoCapitalize="none" style={styles.input} onChangeText={text => ValueChangeEncrypt(text)}/>
          </View>
          <View style={styles.centerer}>
            <Text style={styles.resultText}>{EncryptValue}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>xx =&gt; a</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => CopyStrD}><Icon name="content-copy" size={30} style={styles.icon}/></TouchableOpacity>
            <TextInput autoCapitalize="none" style={styles.input} onChangeText={text => ValueChangeDecrypt(text)}/>
          </View>
          <View style={styles.centerer}>
            <Text style={styles.resultText}>{DecryptValue}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#2C003E',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    width: vw(100),
    height: vh(100),
  },
  text: {
    fontSize: 40,
    fontFamily: 'Arial',
    color: '#EA9085',
    margin: 50,
  },
  resultText: {
    fontFamily: 'Arial',
    color: '#FFA372',
  },
  icon: {
    color: '#FFA372',
    margin: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#512B58',
    color: '#EA9085',
    borderRadius: 5,
    width: vw(85),
    height: 40,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#512B58',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: vw(95),
    margin: 7,
  },
  container: {
    backgroundColor: '#2C003E',
    height: vh(100),
  },
  centerer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFA372',
    width: vw(95),
    margin: 10,
    height: vh(10),
  },
  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA9085',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    width: vw(100),
    top: 0,
  },
  title: {
    fontSize: 30,
    color: '#2C003E',
    margin: 7,
  },
  content: {
    top: vh(10),
  },
});
// ./android/gradlew assemleRelease