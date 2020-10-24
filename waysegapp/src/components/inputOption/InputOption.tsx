import React, { FC, useRef, useState } from 'react'
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { onChange } from 'react-native-reanimated'

interface InputOptionProps {
    onPress?: (value: number) => void,
    label: string,
    value: number,
    checked: boolean,
}


const InputOption: FC<InputOptionProps> = ({ label, onPress, value, checked }) => {
    const ref = useRef<TextInput | null>(null);
    const [focus, setFocus] = useState(false);
    return (
      <View style={[styles.inputContainer]}>
        
        <Text style={styles.labelText}>{label}</Text>
        <View style={styles.optionBlock}>
            <TouchableOpacity style={styles.circle}>
            {checked ? <View style={styles.checkedCircle} /> : <View />}
            </TouchableOpacity>
        </View>

      </View>
    );
}

export default InputOption

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    padding: 8,
  },
  inputContainerFocus: {
    position: 'relative',
    padding: 8,
  },
  inputText: {
    padding: 8,
    // flex: 1
  },
  inputTextFocus: {
    borderColor: 'orange',
  },
  labelText: {
    // flex: 1
    color: '#000',
    padding: 4,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center', // To center the checked circle…
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#131313', // You can set it default or with yours one…
  },
  optionBlock: {
    //   display: 'flex',
    //   flexDirection: 'column'
  }
});
