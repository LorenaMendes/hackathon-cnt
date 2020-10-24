import React, { FC, useRef, useState } from 'react'
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, TextInputProps, View } from 'react-native'
import { onChange } from 'react-native-reanimated'

interface InputItemProps {
    label?: string,
    textInputProps?: TextInputProps,
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
    name?: string;
}


const InputItem: FC<InputItemProps> = ({ textInputProps, label, onChange }) => {
    const ref = useRef<TextInput | null>(null);
    const [focus, setFocus] = useState(false);
    return (
        <View
            style={
                [
                    styles.inputContainer,

                ]
            }
        >
            <Text style={styles.labelText}>{label}</Text>
            <TextInput
                ref={ref}
                onChange={onChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                underlineColorAndroid={"orange"}
                style={[
                    styles.inputText
                ]}
                {...textInputProps}
            />
        </View >
    )
}

export default InputItem

const styles = StyleSheet.create({
    inputContainer: {
        position: "relative",
        padding: 8
    },
    inputContainerFocus: {
        position: "relative",
        padding: 8
    },
    inputText: {
        padding: 8,
        // flex: 1
    },
    inputTextFocus: {
        borderColor: "orange"

    },
    labelText: {
        // flex: 1
        color: "#000",
        padding: 4
    }
})
