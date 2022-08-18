import React, { Component } from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import * as Progress from 'react-native-progress';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      progress: 0,
      indeterminate: true,
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Progress.Bar progress={this.state.progress} width={200} />
      </View>
    );
  }
}

export default App;