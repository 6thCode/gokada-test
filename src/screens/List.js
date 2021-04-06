import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Body, Header, Left} from 'native-base';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {fetchContent} from '../redux/actions';
import UserDetails from '../components/UserDetails';
import {BackArrow} from '../assets/svgs/backArrow';

class List extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.makeRemoteRequest();
    }, 1000);
  }

  makeRemoteRequest = () => {
    this.props.fetchContent();
  };

  render() {
    const {results, isLoading, navigation} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Header
          style={{
            borderBottomWidth: 0,
            backgroundColor: 'transparent',
            elevation: 0,
          }}>
          <Left>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                marginBottom: 10,
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <BackArrow />
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  fontWeight: 'bold',
                  paddingLeft: 15,
                  lineHeight: 24,
                }}>
                All Users
              </Text>
            </TouchableOpacity>
          </Left>
          <Body />
        </Header>
        {isLoading ? <ActivityIndicator color="#0000ff" /> : null}
        <FlatList
          data={results}
          renderItem={({item}) => (
            <UserDetails
              title={item.name}
              email={item.email}
              phone={item.phone}
              address={item.address.street}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={100}
          initialNumToRender={6}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
});

const mapStateToProps = state => {
  return {
    results: state.contentReducer.results,
    isLoading: state.contentReducer.isLoading,
  };
};

const mapDispatchToProps = {
  fetchContent,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
