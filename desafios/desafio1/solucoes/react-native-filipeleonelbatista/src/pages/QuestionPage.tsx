import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';

import headerBackground from '../../assets/pageHeader.png'
import { useNavigation, useRoute } from '@react-navigation/native';

import questions from '../../assets/Questions'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface QuestionPageRouteParams {
    name: string;
}

export default function QuestionPage() {
    const route = useRoute();
    const navigation = useNavigation();

    const [index, setIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [sendResults, setSendResults] = useState(false);

    const params = route.params as QuestionPageRouteParams;

    useEffect(()=>{
        if(sendResults){
            const result = {
                name: params.name,
                points,
                totalQuestions: questions.length,
            };            
        navigation.navigate("PointsPage", result);
        }
    }, [sendResults])

    function showResult() {
        setSendResults(true);
    }

    function loadNextQuestion() {        
        if (index < (questions.length - 1)) {
            setIndex(index + 1);
        }     
        if (index === (questions.length - 1)) {
            showResult();
        }
    }

    function handleSaveResult(i: number) {
        if (questions[index].correctAnswerIndex == i) {
            setPoints(points + 1);
        }
        loadNextQuestion();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={headerBackground}
                style={styles.headerImage}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.headerTitle}>
                            <Text style={styles.headerTitleText}>Pergunta {index + 1} de {questions.length}</Text>
                        </View>
                        <View style={styles.headerQuestionContainer}>
                            <Text style={styles.headerQuestionText}>
                                {questions[index].question}
                            </Text>
                        </View>
                    </View>

                    <View>
                        {questions[index].answers.map((answer, index) => {
                            return (
                                <TouchableOpacity onPress={() => { handleSaveResult(index) }} key={index} style={styles.button}>
                                    <Text style={styles.buttonLabel}>{answer}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            {points}/{questions.length}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    headerImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        paddingTop: 24,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    header: {
        marginVertical: 16,
    },
    headerTitle: {
        marginBottom: 16,
    },
    headerTitleText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 18,
        color: '#fff',
    },
    headerQuestionContainer: {
        marginBottom: 24,
    },
    headerQuestionText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 24,
        color: '#fff',
    },
    button: {
        margin: 8,
        padding: 16,
        backgroundColor: '#5AB5F5',
        borderRadius: 8,
        elevation: 6,
        alignItems: 'center',
    },
    buttonLabel: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: '#fff',
    },
    footer: {
        width: '100%',
        height: 30,
        marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: '#5AB5F5',
        marginLeft: 8,
    },

})