import React, { useReducer, useState, useMemo } from "react";
import produtores from "../../../mocks/produtores";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Estrelas from "../../../componentes/Estrelas";

const distanciaMetros = (distancia) => {
    return `${distancia}m`
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    //const [selec, setSelec] = useState(false);

    const [selec, invertSelec] = useReducer( (selec) => !selec, false );


    const distanciaTexto = useMemo( () => distanciaMetros(distancia), [distancia]);  //chama o distanciaTexto sempre que distancia mudar

    return <TouchableOpacity style={styles.cartao} onPress={invertSelec}>
        <Image style={styles.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={styles.informacoes}>
            <View>
                <Text style={styles.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas} editavel={selec} grande = {selec}/>
            </View>
            <Text style={styles.distancia}>{distanciaTexto}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    cartao: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        //Android
        elevation: 6,
        //iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    }
})