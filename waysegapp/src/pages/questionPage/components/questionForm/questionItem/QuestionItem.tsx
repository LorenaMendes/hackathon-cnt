import React, { FC, useState } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import { IQuestion } from '../../../../../models/questions/IQuestions'


interface IQuestionItemProps {
    questionItem: IQuestion,
    onSelect: (option: { label: string, value: number }) => void
}

const QuestionItem: FC<IQuestionItemProps> = ({ questionItem, onSelect }) => {

    const [selectedValue, setSelectedValue] = useState<number | null>(null)

    return (
        <View style={styles.container}>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>{questionItem.description}</Text>
            </View>
            <View>
                {questionItem.options.map(option => (
                    <View
                        style={[styles.optionContainer, { backgroundColor: selectedValue === option.value ? "orange" : "gray" }]}
                    ><TouchableNativeFeedback
                        style={styles.optionTouch}
                        onPress={() => { setSelectedValue(option.value); onSelect(option) }}
                    >
                            <View>
                                <Text style={styles.optionText}>{option.label}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                ))
                }
            </View >
        </View >
    )
}

export default QuestionItem

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    description: {
        marginBottom: 8
    },
    descriptionText: {
        fontSize: 18,
    },
    optionContainer: {
        backgroundColor: "gray",
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 8
    },
    optionTouch: {
        backgroundColor: "gray",
        padding: 18,
        borderRadius: 8,
    },
    optionText: {
        padding: 18,
        color: "#fff",
        fontSize: 16
    }
})
