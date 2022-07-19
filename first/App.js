import React, { Component } from 'react';
import {Text, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{
          backgroundColor:'crimson',
          paddingVertical:20,
          justifyContent: 'center',
          alignItems:'center',
          elevation:10
        }}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Header</Text>
        </View>
      </View>
    );
  }
}

export default App;