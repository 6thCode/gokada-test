import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView, View, Text} from 'react-native';

const Drawer = createDrawerNavigator();

import Dashboard from './src/screens/Dashboard';
import ListScreen from './src/screens/List';
import HelpScreen from './src/screens/Help';
import SettingsScreen from './src/screens/Settings';
import LogoutScreen from './src/screens/Logout';

const CustomDrawerContent = props => (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView style={{margin: 20}}>
      <View style={{height: 80}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#E9EAEE',
            borderBottomWidth: 1,
            paddingBottom: 22,
          }}>
          <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('View')}>
              <Text
                style={{
                  color: '#838491',
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: '600',
                  marginLeft: 13,
                }}>
                View profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('ListScreen')}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              lineHeight: 20,
              fontWeight: '600',
              marginLeft: 13,
            }}>
            List
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('HelpScreen')}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              lineHeight: 20,
              fontWeight: '600',
              marginLeft: 13,
            }}>
            Help
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SettingsScreen')}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              lineHeight: 20,
              fontWeight: '600',
              marginLeft: 13,
            }}>
            Settings
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('LogoutScreen')}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              lineHeight: 20,
              fontWeight: '600',
              marginLeft: 13,
            }}>
            Logout
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);

function AppScreens() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="ListScreen" component={ListScreen} />
        <Drawer.Screen name="HelpScreen" component={HelpScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="LogoutScreen" component={LogoutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const SwitchNavigator = createSwitchNavigator({
  AppScreens,
});

export default createAppContainer(SwitchNavigator);
