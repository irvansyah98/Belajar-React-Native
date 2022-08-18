import React, { Component } from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      playing:false
    };
  }

  render() {
    return (
      <View>
        <YoutubePlayer
          height={300}
          play={this.state.playing}
          videoId={"TK4AbYMHdrY"}
          // onChangeState={onStateChange}
        />
        <TouchableOpacity
          onPress={() => this.setState({playing:!this.state.playing})}>
          {this.state.playing == true ? (
            <Text>Pause</Text>
          ) : (
            <Text>Play</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;