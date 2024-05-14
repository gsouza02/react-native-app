import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import topo from '../../../mocks/topo';
import produtores from '../../../mocks/produtores';
import { carregaProdutores } from '../../../services/carregaDados';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({topo: Topo}) {

    const [titulo, lista] = useProdutores();

    const header = () => {
        return <>
        <Topo />
        <Text style={styles.titulo}>{titulo}</Text>
        </>
    }
    return <FlatList
        data={lista} 
        ListHeaderComponent={header}
        keyExtractor={({nome}) => nome}
        renderItem={({ item }) => <Produtor {...item}/>}
    />
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: "#464646"
    }
})