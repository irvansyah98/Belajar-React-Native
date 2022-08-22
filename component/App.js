import React, { Component } from 'react';
import {View, Text} from 'react-native';

import Header from './src/components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View>
        <Header title="Header"/>
        <Header title="Header">
          <Text>test</Text>
        </Header>
        <Text>Home</Text>
      </View>
    );
  }
}

export default App;