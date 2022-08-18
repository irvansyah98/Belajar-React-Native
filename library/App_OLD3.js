import React, { Component } from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      modalIsVisible: false
    };
  }
  render() {
    return (
      <View>
      <Text>{this.state.date.toString()}</Text>
        <TouchableOpacity onPress={() => this.setState({modalIsVisible:true})}>
          <Text>Open</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.modalIsVisible}>
          <View style={{
            backgroundColor:"#FFFFFF",
            justifyContent:'center',
            alignItems:'center'
          }}>
            <DatePicker
              date={this.state.date}
              onDateChange={(date) =>
                this.setState({date}, ()=>console.log(this.state.date))
              }
              androidVariant="nativeAndroid"
              mode='datetime'
            />
            <TouchableOpacity onPress={() => this.setState({modalIsVisible:false})}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        
      </View>
    );
  }
}

export default App;