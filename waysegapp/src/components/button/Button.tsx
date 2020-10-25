import React from 'react';
import { View, TouchableOpacity, Text, ViewComponent } from 'react-native';

import styles from './ButtonStyle';
import { color } from 'react-native-reanimated';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

interface IButtonItemProps {
  title?: string;
  name?: string;
  onPress?: () => void
}

var buttonStyle = {
  margin: '10px 10px 10px 0',
  backgroundColor: '#DDDDDD',
};


const Button: React.FC<IButtonItemProps> = ({ title, onPress, children }) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={onPress} style={styles.touch}>
        <Text style={styles.text}>{children ?? title}</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Button;