import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import Feather from "@expo/vector-icons/Feather";
const historias = [


  {
    emoji: '😊',
    historia: 'Cada dia ensolarado é uma oportunidade para sorrir como as crianças no parque.'
  },
  {
    emoji: '😂',
    historia: 'Busque a alegria nas piadas engraçadas da vida, como o comediante que fez todos rirem alto.'
  },
  {
    emoji: '🤣',
    historia: 'A vida é uma festa, e você pode se divertir tanto a ponto de rolar de rir, assim como naquela animada festa.'
  },
  {
    emoji: '❤',
    historia: 'Amar é a linguagem universal, como os olhares cheios de amor trocados por um casal apaixonado.'
  },
  {
    emoji: '🚲',
    historia: 'Pedale pela vida como se estivesse dando um passeio de bicicleta pelo parque.'
  },
  {
    emoji: '🛴',
    historia: 'Aproveite cada momento da vida como se estivesse andando de patinete na calçada, cheio de diversão.'
  },
  {
    emoji: '🏍',
    historia: 'Acelere na estrada da vida como um motociclista destemido atravessando a cidade em alta velocidade.'
  },
  {
    emoji: '🚅',
    historia: 'Seja pontual em seus objetivos, como o trem de alta velocidade que chega à estação com precisão.'
  },
  {
    emoji: '🏎',
    historia: 'Acelere em direção aos seus sonhos como um carro de corrida na pista oval da vida.'
  },
  {
    emoji: '🚓',
    historia: 'Enfrente os desafios como a polícia perseguindo o carro em alta velocidade, com determinação e coragem.'
  },
  {
    emoji: '✈',
    historia: 'Decole em busca de novas aventuras como um avião rumo a lugares exóticos.'
  },
  {
    emoji: '🛫',
    historia: 'Inicie sua jornada de longo curso na vida, com confiança e entusiasmo, como um avião.'
  },
  {
    emoji: '🛬',
    historia: 'Pouse suavemente em suas conquistas como um avião no aeroporto internacional.'
  },
  {
    emoji: '🛸',
    historia: 'Explore o desconhecido como se as luzes estranhas no céu fossem discos voadores.'
  },
  {
    emoji: '🏴‍☠️',
    historia: 'Assuma o controle de sua vida como um capitão pirata que hasteia sua bandeira negra.'
  },
  {
    emoji: '🌏',
    historia: 'Lembre-se de que você é parte deste vasto planeta Terra, brilhando no espaço sideral.'
  },
  {
    emoji: '🛤🏝',
    historia: 'Aprecie a diversidade da vida, percorrendo paisagens incríveis, de trilhos na praia até trilhos nas montanhas.'
  },
  {
    emoji: '🌄',
    historia: 'Cada novo dia é uma oportunidade para seu próprio nascer majestoso sobre as montanhas.'
  },
  {
    emoji: '🌅',
    historia: 'Deixe a beleza do mundo pintar sua vida com cores deslumbrantes, como o pôr do sol.'
  },
  {
    emoji: '🗽',
    historia: 'Erga-se orgulhosamente como a Estátua da Liberdade na cidade de Nova York.'
  },
  {
    emoji: '🧺',
    historia: 'Aproveite os momentos simples da vida, como um piquenique no parque com uma toalha xadrez.'
  },
  {
    emoji: '🧷',
    historia: 'Mantenha-se firme e seguro em seus objetivos, como prender uma capa com um alfinete de segurança.'
  },
  {
    emoji: '🧹',
    historia: 'Limpe os obstáculos de sua jornada, deixando tudo limpo e arrumado, como varrer o chão da casa.'
  },
  {
    emoji: '🪒',
    historia: 'Prepare-se para um novo dia com afiadas decisões, como fazer a barba pela manhã.'
  },
  {
    emoji: '🌞',
    historia: 'Brilhe intensamente na vida, assim como o sol no céu sem nuvens.'
  },
  {
    emoji: '❄',
    historia: 'Aceite as mudanças suaves da vida, como os flocos de neve que caem no inverno.'
  },
  {
    emoji: '🌬',
    historia: 'Enfrente os ventos fortes da adversidade como as árvores que resistem ao vento.'
  },
  {
    emoji: '🐮',
    historia: 'Passeie pela vida com tranquilidade, como as vacas que pastam no campo.'
  },
  {
    emoji: '🏄‍♂️',
    historia: 'Enfrente as ondas da vida como um surfista destemido que pega grandes ondas no oceano.'
  },
  {
    emoji: '👨‍🦼',
    historia: 'Supere as limitações com determinação, assim como o homem que usa uma cadeira de rodas para se locomover com facilidade.'
  },
  {
    emoji: '🚴‍♀️',
    historia: 'Pedale em direção aos seus objetivos como a ciclista que percorre a ciclovia.'
  },
  {
    emoji: '🚴‍♂️',
    historia: 'Participe da corrida da vida, pedalando com força e determinação, como um ciclista na competição.'
  }
];

 
 
function App() {
  const [Emojis, setEmojis] = useState(0);

  function sorteiaEmoji() {
    const newIndex = Math.floor(Math.random() * historias.length);
    setEmojis(newIndex);
  }

  return (
    
      <View style={styles.container}>
       <View style={styles.Header}>
       <Feather
            name ="slack"
            size={28}
            color= 'white'
            />
        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bem Vindo ao Seu Motivador Diário! </Text>
       </View>
        <View style={styles.h1}>
          <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',color:'white'}}>Clique no Card para Receber sua Motivação Diária!</Text>
        </View>
        <View style={styles.ViewHistoria}>
          <TouchableOpacity onPress={sorteiaEmoji}>
            <Text style={styles.emoji}>{historias[Emojis].emoji}</Text>
            <Text style={styles.historia}>{historias[Emojis].historia}</Text>
        </TouchableOpacity>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#663399',
    marginTop: 35,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: 'white',
  },
  Header:{
    marginTop: 20,
    flex: 1,
    flexDirection:'row',
    gap: 10,
  },
  h1: {
    flex: 1,
  },
  ViewHistoria: {
    backgroundColor:'#8a2be2',
    borderRadius: 90,
    borderColor:'white',
    borderWidth: 1,
    width: '80%',
    flex: 4,
    justifyContent:'center',
    alignItems: 'center',
 
  },
  emoji: {
    fontSize: 200,
    alignItems: 'center',
    textAlign: 'center',
  },
  historia: {
    fontSize: 20,
    marginVertical: 20,
    color: '#fff',
    textAlign: 'center',
   
  },
});

export default App;