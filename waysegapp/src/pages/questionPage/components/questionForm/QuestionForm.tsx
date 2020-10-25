import React, { FC, useCallback, useState } from 'react'
import { View, Text, TextInputProps, TouchableNativeFeedback, Keyboard, Button, TouchableHighlight } from 'react-native'
import InputItem from '../../../../components/inputTextItem/InputItem'
import InputOption from '../../../../components/inputOption/InputOption'
import { IResearch } from '../../../../models/Research/IResearch'
// import Button from '../../../../components/button/Button'
import styles from './QuestionFormStyle'
import { Form, Formik } from 'formik'
import { color } from 'react-native-reanimated'

const QuestionForm = () => {
    const [research, setResearch] = useState<IResearch>({} as IResearch)
    const [date, setDate] = useState(new Date());

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

    var [ isPress, setIsPress ] = React.useState(0);

    console.log(isPress);

    return (
      <View>
        <View>
        </View>
        <View style={styles.container}>
          <Formik
            initialValues={{option: 0}}
            onSubmit={(values) => {
              
            }}
            >
            {(props) => (
              <View>
                <View style={styles.button}>
                  <Button
                    color = 'gray'
                    onPress={() => {
                      setIsPress(1);
                    }}
                    title="Pista dupla com canteiro central"
                    />
                </View>
                <View style={styles.button}>
                  <Button
                    color = 'gray'
                    onPress={() => {
                      setIsPress(2);
                    }}
                    title="Pista dupla com barreira central"
                    />
                </View>
                <View style={styles.button}>
                  <Button
                    color = 'orange'
                    onPress={() => {
                      setIsPress(3);
                    }}
                    title="Pista dupla com faixa central"
                    />
                </View>
                <View style={styles.button}>
                  <Button
                    color = 'gray'
                    onPress={() => {
                      setIsPress(4);
                    }}
                    title="Pista simples de mão única"
                    />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
}





export default QuestionForm
