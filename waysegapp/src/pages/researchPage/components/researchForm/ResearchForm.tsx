import React, { FC, useCallback, useState } from 'react'
import { View, Text, TextInputProps, TouchableNativeFeedback, Keyboard, Button, ScrollView } from 'react-native'
import InputItem from '../../../../components/inputTextItem/InputItem'
import InputOption from '../../../../components/inputOption/InputOption'
import { IResearch } from '../../../../models/Research/IResearch'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './ResearchFormStyle'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native'

const ResearchForm = () => {
  const [research, setResearch] = useState<IResearch>({} as IResearch)
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)

  const navigation = useNavigation()

  const onSubmitHandle = useCallback(
    () => {
      navigation.navigate("Questionário")
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
      <ScrollView style={styles.flexContainer}>
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          onConfirm={onChangeDateTime}
          onCancel={() => {
            setShowDatePicker(false);
          }}
        />
        <InputItem
          label="Formulário"
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

        <InputItem label="UF" textInputProps={{ value: research.state }} />

        <TouchableNativeFeedback
          onPress={() => {
            setShowDatePicker(true);
            Keyboard.dismiss();
          }}>
          <View
            style={{
              padding: 12,
            }}>
            <Text style={{ marginBottom: 8 }}>Horário de início</Text>
            <Text
              style={{
                borderBottomWidth: 1,
                padding: 4,
                borderBottomColor: '#fa0',
              }}>
              {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </ScrollView>
      <View>
        <TouchableNativeFeedback onPress={onSubmitHandle}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Iniciar Pesquisa</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}





export default ResearchForm
