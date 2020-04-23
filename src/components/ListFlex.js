import React from 'react';
import { ScrollView, View, FlatList, Text} from 'react-native';

const alunos = [
    {id: 1, nome: 'Beatriz', nota: 9.7},
    {id: 2, nome: 'Joelda', nota: 9},
    {id: 3, nome: 'Salumão', nota: 10},
    {id: 4, nome: 'Ricardo', nota: 7.5},
    {id: 5, nome: 'Rillsen', nota: 8},
    {id: 6, nome: 'Walker', nota: 8.1},
    {id: 7, nome: 'Thiago', nota: 7.8},
    {id: 8, nome: 'Kelenilda', nota: 10},
    {id: 9, nome: 'Rodrigo', nota: 8.9},
    {id: 10, nome: 'Maria', nota: 8.5}
];

const itemStyle ={
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex box
    alignItems: 'center',
    // justifyContent: 'center'
    flexDirection: 'row',
    justifyContent: 'space-between'

}

export const Aluno = props =>{
    return(
        <View style={itemStyle}>
            <Text>Nome: {props.nome}</Text>
            <Text style={{fontWeight:'bold'}}>Nota: {props.nota} </Text>
        </View>
    );
}

export default props => {
    const renderItem = ({item})=>{
        return <Aluno {...item} />
    }

    return(
            <FlatList data={alunos} renderItem={renderItem} 
            keyExtractor = {item => item.id.toString()}
            />
    );
}