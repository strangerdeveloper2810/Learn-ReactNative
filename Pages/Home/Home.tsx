import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {style} from './style';

class Home extends Component {
  _onPress = () => {
    console.log('click ');
  };
  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>Today's Task</Text>
        <ScrollView>
          <View>
            <View>
              <View></View>
              <Text></Text>
            </View>

            <View></View>
          </View>
        </ScrollView>
        <View style={style.wrapper}>
          <TextInput
            style={[style.inputTask, style.shadowInput]}
            placeholder="Write a task"
          />
          <TouchableOpacity
            onPress={this._onPress}
            style={[style.btnAdd, style.shadowInput]}>
            <Image source={require('../../images/add.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
