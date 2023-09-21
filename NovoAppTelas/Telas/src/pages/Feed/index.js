import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Conexao from "../Conexões";

export default function Feed(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.Botoes}>
            <Button title = "Ir para Conexao" onPress={() => navigation.navigate('Conexao')}/>
            <Button title = "Ir para MeuBar" onPress={() => navigation.navigate('MeuBar')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Botoes: {
        flex: 1,
        flexDirection:'row'
    }
})