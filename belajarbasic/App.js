import React, { Component } from 'react';
import {View, Text} from 'react-native';

let nama = "budi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View>
        <Text>
          hello {nama}
        </Text>
      </View>
    );
  }
}

export default App;