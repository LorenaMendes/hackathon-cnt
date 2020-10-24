import { Formik } from 'formik'
import React, { FC, useCallback, useState } from 'react'
import { View, Text, TextInputProps, Button, TouchableNativeFeedback, Keyboard } from 'react-native'
import InputItem from '../../../../components/inputTextItem/InputItem'
import { IResearch } from '../../../../models/Research/IResearch'
import styles from './ResearchFormStyle'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNDateTimePicker from '@react-native-community/datetimepicker'

const ResearchForm = () => {
    const [research, setResearch] = useState<IResearch>({} as IResearch)
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false)

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
    const onChangeDateTime = useCallback(
        (_date) => {
            setDate(_date);
            setShowDatePicker(false);

        },
        [],
    )


    return (
        <View style={styles.container}>
            < DateTimePickerModal
                isVisible={showDatePicker}
                mode="date"
                onConfirm={onChangeDateTime}
                onCancel={() => { setShowDatePicker(false); }}
            />
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

            <TouchableNativeFeedback
                onPress={() => { setShowDatePicker(true); Keyboard.dismiss() }}
            >
                <View
                    style={
                        {
                            padding: 12
                        }
                    }
                >
                    <Text style={{ marginBottom: 8 }} >Data:</Text>
                    <Text
                        style={
                            {
                                borderBottomWidth: 1,
                                padding: 4,
                                borderBottomColor: "#fa0"
                            }
                        }
                    >
                        {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
                    </Text>
                </View>
            </TouchableNativeFeedback>





        </View>

    )
}





export default ResearchForm
