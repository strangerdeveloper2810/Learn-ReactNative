import React, {Component, ReactElement} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {style} from './style';
import TaskItem from './TaskItem';

interface IProps {}

interface IState {
  titleItem: string;
  listItem: string[];
}
class Home extends Component<IProps, IState> {
  private task: string;
  private arrItem: string[];

  constructor(props: any) {
    super(props);
    this.task = '';
    this.arrItem = [];
    this.state = {
      titleItem: '',
      listItem: [],
    };
  }
  private _onPress = () => {
    const newArrItem = [...this.arrItem, this.task]; // Tạo một mảng mới
    this.setState({
      listItem: newArrItem,
    });
  };

  private _onTextChange = (text: string) => {
    this.task = text;
  };

  private _onDelete = (index: number) => {
    const newArrItem = this.arrItem.filter((_, i) => i !== index); // Tạo một mảng mới
    this.setState({
      listItem: newArrItem,
    });
  };

  private _renderTaskItem = (): ReactElement[] => {
    return this.state.listItem.map((item, index) => (
      <TaskItem
        task={item}
        onDelete={() => this._onDelete(index)}
        index={index}
        key={index}
      />
    ));
  };
  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>Today's Task</Text>
        <ScrollView style={style.mt_24}>{this._renderTaskItem()}</ScrollView>
        <View style={style.wrapper}>
          <TextInput
            style={[style.inputTask, style.shadowInput]}
            placeholder="Write a task"
            onChangeText={this._onTextChange}
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
