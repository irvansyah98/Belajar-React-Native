import React, { Component } from 'react';
import {Text, View, StatusBar, Image} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor="#e53935"/>
        <View style={{
          backgroundColor:'#c62828',
          paddingVertical:20,
          justifyContent: 'center',
          alignItems:'center',
          elevation:10
        }}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Header</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image 
            source={require('./src/images/image1.jpg')}
            style={{width:300,height:600}}
          />
        </View>
      </View>
    );
  }
}

export default App;