import React, { useState } from 'react'
import { Text, View } from 'react-native'
import QuestionForm from './components/questionForm/QuestionForm'
import style from './QuestionPageStyle'

const QuestionPage = () => {
    return (
        <View>
            <QuestionForm />
        </View>
    )
}

export default QuestionPage
