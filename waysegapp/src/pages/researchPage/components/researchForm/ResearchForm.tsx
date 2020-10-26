import React, { FC, useCallback, useState } from 'react'
import { View, Text, TextInputProps, TouchableNativeFeedback, Keyboard } from 'react-native'
import InputItem from '../../../../components/inputTextItem/InputItem'
import InputOption from '../../../../components/inputOption/InputOption'
import { IResearch } from '../../../../models/Research/IResearch'
import Button from '../../../../components/button/Button'
import styles from './ResearchFormStyle'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native'


const ResearchForm: FC = () => {


  const navigation = useNavigation();

  const [research, setResearch] = useState<IResearch>({} as IResearch)
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)

  const onSubmitHandle = useCallback(
    () => {
      navigation.navigate("Questionário");
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
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={onChangeDateTime}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
      <InputItem
        label="Formulario"
        textInputProps={{
          value: research.form,
        }}
      />
      <InputItem label="Folha" textInputProps={{ value: research.roadName }} />

      <TouchableNativeFeedback
        onPress={() => {
          setShowDatePicker(true);
          Keyboard.dismiss();
        }}>
        <View
          style={{
            padding: 12,
          }}>
          <Text style={{ marginBottom: 8 }}>Data:</Text>
          <Text
            style={{
              borderBottomWidth: 1,
              padding: 4,
              borderBottomColor: '#fa0',
            }}>
            {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
          </Text>
        </View>
      </TouchableNativeFeedback>

      <Button onPress={onSubmitHandle} title="Gerar Formulário" />
    </View>
  );
}





export default ResearchForm
