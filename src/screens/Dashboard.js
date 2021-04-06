import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {BurgerMenuIcon} from '../assets/svgs/burgerMenuIcon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowOffset: {width: 4, height: 4},
          shadowRadius: 30,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <BurgerMenuIcon />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Check List Screen for list of all users</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
