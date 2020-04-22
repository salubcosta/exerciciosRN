import React from 'react';
import { Button, Alert, ToastAndroid, Platform} from 'react-native';

export default props =>{
    const notificar = msg => {
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg + 'Android', ToastAndroid.LONG);
        } else {
            Alert.alert('Informação', msg + 'iOS');
        }
    }
    return(
        <Button title='Plataforma?' onPress={()=>notificar('App rodando em ambiente: ')} />
    );
};