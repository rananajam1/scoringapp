import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Card from '../redux/js/components/Card';

function Goals(props) {
    let count=0
    const [enteredGoal, setEnteredGoal] = useState('');
    const [goals, setGoals] = useState([]);

    const goalInputHandler = enteredText =>{
        setEnteredGoal(enteredText)
    }

    return (
        <View>
            <View>
                <TextInput placeholder="Add Goal" onChangeText={goalInputHandler} value={enteredGoal} />
                <Button title="Add" onPress={() => setGoals(goalds => [...goals,enteredGoal])} />
            </View>
            <ScrollView >
                <Card>
                {
                    goals.map(goal => 
                        <Text style={styles.listView} onLongPress={()=> console.log(goal)} key={count++}>{goal}</Text>
                        )
                }
                </Card>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listView:{
        width:300,
        padding:10,
        backgroundColor:'#ccc',
        borderColor:"black",
        justifyContent:'center',
        borderWidth:1,
        marginVertical:10,
        alignItems:'center'
    }
})

export default Goals;