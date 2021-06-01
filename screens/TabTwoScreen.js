import * as React from 'react';
import { Text, View } from '../components/Themed';
import Users from '../components/Users';
import styles from '../stylesheet/screens';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Users/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}