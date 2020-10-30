import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Share } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import headerBackground from '../../assets/header.png'
import { useNavigation, useRoute } from '@react-navigation/native';

interface PointsPageRouteParams {
    name: string;
    points: number;
    totalQuestions: number;
}

export default function PointsPage() {
    const route = useRoute();
    const navigation = useNavigation();

    const [status, setStatus] = useState("");
    const [cor, setCor] = useState("#000");

    const params = route.params as PointsPageRouteParams;

    useEffect(() => {
        if (params.points === 0) {
            setStatus("Ruim");
        } else {

            const res = ((params.points * 100) / params.totalQuestions)

            if ((res > 0) && (res <= 30)) {
                setStatus("Ruim");
                setCor("#F00");
            }
            if ((res > 30) && (res <= 60)) {
                setStatus("Bom");
                setCor("#5AB5F5");
            }
            if (res > 60) {
                setStatus("Excelente");
                setCor("#6FCF97");
            }
        }

    }, [])


    const onShare = async () => {
        try {
            await Share.share({
                message: `Minha pontuação foi de ${params.points}/${params.totalQuestions}\nno App Quiz - Hacktoberfest. \nSaiba mais em: https://github.com/filipeleonelbatista`,
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={headerBackground}
                style={styles.headerImage}
            >
                <View style={styles.containerLogo}>
                    <Text style={styles.title}>
                        {params.name}
                    </Text>
                    <Text style={styles.description}>
                        Sua pontuação neste quiz é de
                    </Text>
                </View>

                <View style={styles.containerName}>
                    <View style={styles.inputGroup}>
                        <Text style={[styles.points, { color: cor }]}>{params.points}/{params.totalQuestions}</Text>
                        <Text style={[styles.pointsText, { color: cor }]}>{status}</Text>
                    </View>
                    <RectButton
                        onPress={() => {
                            navigation.navigate('StartPage');
                        }} style={[styles.button, {marginTop:16}]}
                    >
                        <Text style={styles.buttonLabel}>Jogar Novamente</Text>
                    </RectButton>

                    <Text style={[styles.footerText, { textAlign: 'center', marginVertical: 16, }]}>
                        {"Não esqueça de compartilhar\ncom seus amigos\npara ver quem acerta mais!"}
                    </Text>

                    <RectButton onPress={onShare} style={[styles.button, {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}]}>
                        <Feather name="share-2" size={16} style={{ marginHorizontal: 8 }} color="#FFF" />
                        <Text style={styles.buttonLabel}>
                            Compartilhar
                        </Text>
                    </RectButton>
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
        alignItems: 'center',
    },
    points: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 72,
        color: '#121214',
        marginLeft: 8,
    },
    pointsText: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 50,
        color: '#121214',
        marginLeft: 8,
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
    button: {
        marginVertical: 8,
        width: '90%',
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