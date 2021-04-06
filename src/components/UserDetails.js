import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class UserDetails extends Component {
  render() {
    const {title, email, phone, address} = this.props;

    return (
      <View
        style={{
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text style={{color: '#000', fontSize: 16, lineHeight: 20}}>
          Name:- {title}
        </Text>
        <Text style={{color: '#4f4f4f', fontSize: 14, lineHeight: 20}}>
          Email:- {email}
        </Text>
        <Text style={{color: '#4f4f4f', fontSize: 14, lineHeight: 20}}>
          Number:- {phone}
        </Text>
        <Text style={{color: '#4f4f4f', fontSize: 14, lineHeight: 20}}>
          Address:- {address}
        </Text>
      </View>
    );
  }
}
