import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import estrela from "../assets/estrela.png";
import estrelaCinza from "../assets/estrelaCinza.png";

export default function Estrela({ onPress, desabilitada = true, preenchida, grande = false }) {
    const styles = stylesFunction(grande);

    const getImagem = () => {
        if (preenchida) {
            return estrela;
        }
        else return estrelaCinza;
    }

    return <TouchableOpacity
        onPress={onPress}
        disabled={desabilitada}
    >
        <Image source={getImagem()} style={styles.estrela} />
    </TouchableOpacity>
}

const stylesFunction = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    }
})