import React from 'react';
import {Text} from 'react-native';

import Style from '../Style/Style';

const SimpleText = (props) => {

    navigationOptions = {
        drawerLabel: 'Simples'
    }

    return(
        <Text style={Style.ex}>
            {props.param}
        </Text>
    );
};

export default SimpleText;
