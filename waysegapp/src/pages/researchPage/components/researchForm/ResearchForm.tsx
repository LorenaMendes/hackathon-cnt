import { Formik } from 'formik'
import React, { FC, useCallback, useState } from 'react'
import { View, Text, TextInputProps, Button } from 'react-native'
import InputItem from '../../../../components/inputTextItem/InputItem'
import { IResearch } from '../../../../models/Research/IResearch'
import styles from './ResearchFormStyle'

const ResearchForm = () => {
    const [research, setResearch] = useState<IResearch>({} as IResearch)

    const onSubmitHandle = useCallback(
        () => {

        },
        [],
    )

    const onChangeHandle = useCallback(
        () => {

        },
        [],
    )
    return (
        <View style={styles.container}>
            <Text>ResearchForm</Text>
            <InputItem
                label="Formulario"
                textInputProps={
                    {
                        value: research.form
                    }
                }
            />
            <InputItem
                label="Folha"
                textInputProps={{ value: research.roadName }}
            />
            <Button title={"Enviar"} onPress={onSubmitHandle} ></Button>
        </View>

    )
}





export default ResearchForm
