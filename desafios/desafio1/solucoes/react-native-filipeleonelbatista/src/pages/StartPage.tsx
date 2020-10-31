import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Linking, Dimensions } from 'react-native';

import { RectButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import headerBackground from '../../assets/header.png'
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';

export default function StartPage() {
    const [name, setName] = useState("");
    const navigation = useNavigation();
    function handleValidationName(){
        if(name != ""){
            navigation.navigate("QuestionPage", {name});
        }else{
            alert("Por favor, preencha o nome!")
        }       
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={headerBackground}
                style={styles.headerImage}
            >
                <View style={styles.containerLogo}>
                    <ImageBackground
                        source={logo}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Quiz App</Text>
                    <Text style={styles.description}>
                        Um app para o Hacktobberfest
                    </Text>
                </View>

                <View style={styles.containerName}>
                    <Text style={styles.containerNameDescription}>
                        Digite seu nome para iniciarmos
                    </Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Seu Nome</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                        <RectButton
                            onPress={handleValidationName}
                            style={styles.startButton}>
                            <Text style={styles.startButtonLabel}>
                                Iniciar
                            </Text>
                        </RectButton>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => { Linking.openURL("https://github.com/filipeleonelbatista") }}
                    >
                        <Text style={styles.footerText}>Veja mais no repositório da aplicação</Text>
                    </TouchableOpacity>
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
        // width: '100%',
        // height: '100%',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        paddingTop: 24,
    },
    containerLogo: {
        alignItems: 'center',
        marginVertical: 48,
    },
    logo: {
        width: 50,
        height: 65,
    },
    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 32,
        color: '#fff',
    },
    description: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: '#fff',
    },
    containerName: {
        alignItems: 'center',
    },
    containerNameDescription: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: '#fff',
    },
    inputGroup: {
        marginTop: 16,
        width: '90%',
        padding: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
        elevation: 6,
    },
    label: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: '#121214',
        marginLeft: 8,
    },
    input: {
        marginVertical: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
    },
    startButton: {
        padding: 16,
        backgroundColor: '#5AB5F5',
        borderRadius: 8,
        elevation: 6,
        alignItems: 'center',
    },
    startButtonLabel: {
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