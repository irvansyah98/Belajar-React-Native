import React, { Component } from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      toolTipVisible:false
    };
  }

  componentDidMount () {
    this.setState({
      toolTipVisible:true
    })
  };
  

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Tooltip
          isVisible={this.state.toolTipVisible}
          content={<Text>Check this out!</Text>}
          placement="top"
          onClose={() => this.setState({ toolTipVisible: false })}
        >
          <TouchableOpacity onPress={() => this.setState({toolTipVisible:true})}>
            <Text>Tooltip</Text>
          </TouchableOpacity>
        </Tooltip>
      </View>
    );
  }
}

export default App;