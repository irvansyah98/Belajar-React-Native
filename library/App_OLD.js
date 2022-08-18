import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import Toast from 'react-native-toast-message';
import Modal from "react-native-modal";

var Spinner = require('react-native-spinkit');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen:false
    };
  }

  showNotif = (test) => {
    Snackbar.show({
      text: test,
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  showToast = () => {
    Toast.show({
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  render() {
    return (
      <View style={{flex:1}}>
      <Toast/>
      <Spinner style={{marginBottom: 50}} isVisible={true} size={25} type={'CircleFlip'} color={"#212121"}/>
      <Modal isVisible={this.state.modalOpen}>
        <View style={{ padding:20, borderRadius:10 ,backgroundColor:'#ffffff', alignItems:'center'}}>
          <Text>I am the modal content!</Text>
          <TouchableOpacity
          onPress={()=> this.setState({modalOpen:false})}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
        <TouchableOpacity
          style={{marginTop:150}}
          onPress={()=> this.setState({modalOpen:true})}>
          <LinearGradient 
            colors={['#12c2e9', '#c471ed', '#f64f59']} 
            // start={{x: 0, y: 0}} 
            // end={{x: 1, y: 0}} 
            style={{
              paddingVertical:20,
              marginHorizontal:10,
              borderRadius:10,
              alignItems:'center',
            }}
            useAngle={true}
            angle= {45}
            angleCenter={{x: 0.5, y: 0.5}}
            >
            <Text style={{color:'#ffffff'}}>
              Sign in with Facebook
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;