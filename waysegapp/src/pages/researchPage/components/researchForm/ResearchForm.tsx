import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { IResearch } from '../../../../models/Research/IResearch'
import styles from './ResearchFormStyle'

const ResearchForm = () => {
    const [research, setResearch] = useState<IResearch>({} as IResearch)

    return (
        <View style={styles.container}>
            <Text>ResearchForm</Text>
            <View style={styles.inputContainer}>
                <TextInput></TextInput>
            </View>
        </View>
    )
}

export default ResearchForm
