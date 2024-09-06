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
        <ScrollView style={style.mt_24}>
          <View style={style.taskItem}>
            <View style={style.subTaskItem}>
              <View style={[style.square, style.mr_16]}></View>
              <Text>Like</Text>
            </View>

            <View style={style.circle}></View>
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
