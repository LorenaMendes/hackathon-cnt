import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, TextInputProps, TouchableNativeFeedback, Keyboard, TouchableHighlight, FlatList, PermissionsAndroid, Platform } from 'react-native'
import InputItem from '../../../../components/inputTextItem/InputItem'
import InputOption from '../../../../components/inputOption/InputOption'
import { IResearch, IResearchRoadData, IRoadInterval } from '../../../../models/Research/IResearch'
import styles from './QuestionFormStyle'
import { IQuestion } from '../../../../models/questions/IQuestions'
import QuestionItem from './questionItem/QuestionItem'
import { v4 } from 'uuid';
import Button from '../../../../components/button/Button'
import Geolocation from '@react-native-community/geolocation';


const ROAD_INTERVAL_1: IRoadInterval = {
  id: v4(),
  km: 10,
  start: "2016-01-04 10:34:23",
  finish: "2016-01-04 17:21:15",
  gps: "",
  latitude: "-19.8520046",
  logintude: "-43.9150582",
  data: {} as IResearchRoadData,
  createdAt: new Date(),
}

// const RESEARCH {
//   id: "";
//   form: ""
//   data: new Date(),
//   state: ""
//   felxible: true,
//   hard: true,
//   roadName: ""
//   route: 15,
//   roadDatas: IResearchRoadData[],
//   roadIntervals: ROAD_INTERVAL,
//   createdAt: new Date(),
// }

const QUESTIONS: IQuestion[] = [
  {
    id: v4(),
    description: "1.1 - Tipo de Rodovia",
    mandatoryImage: false,
    options: [
      {
        label: "Pista dupla com canteiro central",
        value: 1
      },
      {
        label: "Pista dupla com barreira central",
        value: 2
      },
      {
        label: "Pista dupla com faixa central",
        value: 3
      },
      {
        label: "Pista simples de mão única",
        value: 4
      },
    ]
  },
  {
    id: v4(),
    description: "1.2 - Perfil da Rodovia",
    mandatoryImage: false,
    options: [
      { label: "Plano", value: 1 },
      { label: "Ondulado ou Montanhoso", value: 2 },
    ]
  },
  {
    id: v4(),
    description: "1.3 - Faixa Adicional de Subida",
    mandatoryImage: false,
    options: [
      { label: "Possui faixa adicional de subida", value: 1 },
      { label: "NÃO possui faixa adicional de subida", value: 2 },
    ]
  },
  {
    id: v4(),
    description: "1.4 - Pontes / Viadutos",
    mandatoryImage: false,
    options: [
      { label: "Possui ponte ou viaduto", value: 1 },
      { label: "NÃO possui ponte ou viaduto", value: 2 },
    ]
  },
  {
    id: v4(),
    description: "1.5 - Presença de Curvas Perigosas",
    mandatoryImage: false,
    options: [
      { label: "Trecho COM curvas perigosas", value: 1 },
      { label: "Trecho SEM curvas perigosas", value: 2 },
    ]
  },
  {
    id: v4(),
    description: "1.5.1 - Condições das Curvas Perigosas",
    mandatoryImage: false,
    options: [
      { label: "COM placas E COM defensas", value: 1 },
      { label: "COM placas E SEM defensas", value: 2 },
      { label: "SEM placas E COM defensas", value: 3 },
      { label: "SEM placas E SEM defensas", value: 4 },
    ]
  },
  {
    id: v4(),
    description: "1.6 - Acostamento",
    mandatoryImage: false,
    options: [
      { label: "COM acostamento", value: 1 },
      { label: "SEM acostamento", value: 2 },
    ]
  },
  {
    id: v4(),
    description: "1.6.1 - Pavimento do Acostamento",
    mandatoryImage: false,
    options: [
      { label: "Perfeito", value: 1 },
      { label: "Desgastado", value: 2 },
      { label: "Afundamentos / ondulações / buracos", value: 3 },
      { label: "Destruído", value: 4 },
    ]
  },
  {
    id: v4(),
    description: "2.1 - Condições de Superfície",
    mandatoryImage: false,
    options: [
      { label: "Perfeito", value: 1 },
      { label: "Desgastado", value: 2 },
      { label: "Afundamentos / ondulações / buracos", value: 3 },
      { label: "Destruído", value: 4 },
    ]
  },
  {
    id: v4(),
    description: "2.2 - Velocidade devido ao pavimento",
    mandatoryImage: false,
    options: [
      { label: "Não obriga a redução de velocidade", value: 1 },
      { label: "Obriga a redução de velocidade", value: 2 },
      { label: "Baixíssima velocidade", value: 3 },
    ]
  },
  {
    id: v4(),
    description: "2.3 - Ponto Crítico",
    mandatoryImage: true,
    options: [
      { label: "Não possui", value: 1 },
      { label: "Queda de barreira", value: 2 },
      { label: "Ponte caída", value: 3 },
      { label: "Erosão na pista", value: 4 },
      { label: "Buraco grande", value: 5 },
      { label: "Passagem em nível", value: 6 },
      { label: "Obra no pavimento", value: 7 },
      { label: "Balança em operação", value: 8 },
      { label: "Outro(s)", value: 9 },
    ]
  },
  {
    id: v4(),
    description: "3.1.1 - Faixa Central",
    mandatoryImage: false,
    options: [
      { label: "Pintura da faixa central visível", value: 1 },
      { label: "Pintura da faixa central desgastada", value: 2 },
      { label: "Pintura da faixa central inexistente", value: 3 },
    ]
  },
]


const QuestionForm = () => {
  const [research, setResearch] = useState<IResearch>({} as IResearch)
  const [date, setDate] = useState(new Date());

  const [questions, setQuestions] = useState<IQuestion[]>(QUESTIONS)
  const [location, setLocation] = useState({ lat: "", log: "" })
  const refFlat = useRef<FlatList<IQuestion>>(null)


  useEffect(() => {

    // Geolocation.getCurrentPosition((e) => console.log(e.coords))

  }, [])




  return (
    <View style={styles.container}>
      <FlatList
        ref={refFlat}
        data={questions}
        ListHeaderComponent={() => (
          <View style={{ padding: 8, borderWidth: 1, borderColor: "orange", margin: 16, borderRadius: 8 }}>
            <Text style={{ color: "orange" }}>Localização</Text>
            <Text>{location.lat}</Text>
            <Text>{location.log}</Text>
            <Button
            onPress={() => {
              Geolocation.getCurrentPosition(info => console.log(info));
            }}
            >
              <Text> Localização Atual</Text>
            </Button>
          </View>
        )}
        renderItem={
          (question) => (
            <QuestionItem
              onSelect={
                () => {
                  if (question.index + 1 < questions.length) {

                    refFlat.current?.scrollToIndex(
                      { animated: true, index: question.index + 1 })
                  }
                }
              }
              questionItem={question.item}
            />
          )
        }
        keyExtractor={item => item.id}
        ListFooterComponent={() => (
          <Button>
            <Text>ENVIAR FORMULÁRIO</Text>
          </Button>
        )}
      />
    </View>
  );
}





export default QuestionForm
