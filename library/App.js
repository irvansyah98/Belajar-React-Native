import React, { Component } from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae, Hoshi } from 'react-native-textinput-effects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:"crimson", paddingHorizontal:20}}>
        <Sae
          label={'Email Address'}
          labelStyle={{color:"#FFFFFF"}}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'white'}
          inputPadding={16}
          labelHeight={24}
          // active border height
          borderHeight={2}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
        />

        <Hoshi
          style={{marginTop:50}}
          label={'Town'}
          // this is used as active border color
          borderColor={'#FFFFFF'}
          // active border height
          borderHeight={3}
          inputPadding={16}
          labelStyle={{color:"#FFFFFF"}}
          // this is used to set backgroundColor of label mask.
          // please pass the backgroundColor of your TextInput container.
          backgroundColor={'crimson'}
        />
      </View>
    );
  }
}

export default App;