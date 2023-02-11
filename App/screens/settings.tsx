import { StyleSheet } from 'react-native';
import React from 'react';
import {Button, SafeAreaView, Alert } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Button

                // Some properties given to Button

                title="Tap Me"
                onPress={() => Alert.alert(
                    'The Button Works !')}
                color="#3D4A4A"

            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
