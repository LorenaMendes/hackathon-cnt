import React, { FC, useState } from 'react'
import { View, Text, TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { IResearch } from '../../../../models/Research/IResearch'
import styles from './ResearchFormStyle'

const ResearchForm = () => {
    const [research, setResearch] = useState<IResearch>({} as IResearch)

    return (
        <View style={styles.container}>
            <Text>ResearchForm</Text>

        </View>
    )
}

interface InputItem extends TextInputProps {

}

const InputItem: FC<InputItem> = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputContainer} placeholder="teste"></TextInput>
        </View>
    )
}


export default ResearchForm
