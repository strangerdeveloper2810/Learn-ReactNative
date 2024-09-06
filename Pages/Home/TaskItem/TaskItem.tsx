import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from '../style';

interface TaskItemProps {
  task: string;
  onDelete: (index: number) => void;
  index: number;
}

const TaskItem: React.FC<TaskItemProps> = memo(({task, onDelete, index}) => {
  console.log({task});
  return (
    <TouchableOpacity onPress={() => onDelete(index)}>
      <View style={[style.taskItem, style.mt_16]}>
        <View style={style.subTaskItem}>
          <View style={[style.square, style.mr_16]}></View>
          <Text>{task}</Text>
        </View>

        <View style={style.circle}></View>
      </View>
    </TouchableOpacity>
  );
});

export default TaskItem;
