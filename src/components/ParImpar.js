import React from 'react';
import { View, Text } from 'react-native';

import Style from '../Style/Style';

function parOuImpar(num){
    // if(num % 2 == 0){
    //     return <Text style={Style.ex}>Par</Text>
    // } else {
    //     return <Text style={Style.ex}>Ímpar</Text>
    // }
    const r = (num % 2 == 0) ? 'Par' : 'Ímpar';
    return <Text style={Style.ex}>{r}</Text>
}


const ParImpar = props => {  
    return(
        <View>
            {parOuImpar(props.numero)}
        </View>
    );
}

export default ParImpar;