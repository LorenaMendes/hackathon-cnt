import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './ButtonStyle';
import { color } from 'react-native-reanimated';

interface IButtonItemProps {
  title?: string;
  textInputProps?: IButtonItemProps;
  name?: string;
}

var buttonStyle = {
  margin: '10px 10px 10px 0',
  backgroundColor: '#DDDDDD',
};


const Button: React.FC<IButtonItemProps> = ({title}) => {
  return (
    <TouchableOpacity style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;