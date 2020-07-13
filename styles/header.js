import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    ViewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height: 100,
        paddingTop: 40,
        shadowColor:'#000',
        shadowOffset:{width: 0, height:10},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'  
    },
    textStyle: {
        fontSize: 20
    }
});