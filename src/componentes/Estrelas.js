import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Estrela from "./Estrela";

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}) {
    const [qtd, setQtd] = useState(quantidadeAntiga);

    const RenderStars = () => {
        const listaEstrelas = [];

        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela
                key = {i}
                onPress={() => setQtd(i + 1)} 
                desabilitada = {!editavel}
                preenchida={i < qtd}
                grande ={grande}
                />
            )
        }

        return listaEstrelas
    }
    return <View style={styles.estrelas}>
        <RenderStars />
    </View>
}

const styles = StyleSheet.create({
    estrelas: {
        flexDirection: 'row'
    }
})