import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";


export default function Conexao(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.Header}>
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />
            <Feather
            name ="user"
            size={28}
            color= 'black'
            />

            </View>
            <View style={styles.Body}>

            </View>
           <View style={styles.Footer}>

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
    Headers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})