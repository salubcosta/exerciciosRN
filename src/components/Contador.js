import React, {Component} from 'react';
import { View, Text, TouchableHighlight} from 'react-native';



export default class Contador extends Component{
    state = {
        numero: 0
    }

    maisUm = ()=>{
        this.setState({numero : this.state.numero + 1});
    }

    render(){
        return(
            <View>
                <Text>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                >
                    <Text>Clique aqui</Text>
                </TouchableHighlight>
            </View>
        );
    }
}