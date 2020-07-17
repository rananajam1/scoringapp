import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';


function PlayerStats (props) {

    const winRation = (matches, won) => {
        let result = (won/matches).toFixed(2);
        return(result);
    }
    const strikeRate = (balls, runs) => {
        let result = ((runs/balls)*100).toFixed(2);
        return(result);
    }

    return(
        <View style={styles.containerStyle}>
             <DataTable style={{}}>
            <DataTable.Header style={{backgroundColor: "#507E14"}}>
              <DataTable.Title numeric>Format</DataTable.Title>
              <DataTable.Title numeric>T20</DataTable.Title>
              <DataTable.Title numeric>One-Day</DataTable.Title>
              <DataTable.Title numeric>Test</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', }}>
                <DataTable.Cell>Matches</DataTable.Cell>
                <DataTable.Cell numeric>{props.children.t20.matches}</DataTable.Cell>
                <DataTable.Cell numeric>{props.children.oneday.matches}</DataTable.Cell>
                <DataTable.Cell numeric>{props.children.test.matches}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', backgroundColor: "#507E14" }}>
              <DataTable.Cell>Won</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.won}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.won}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.won}</DataTable.Cell>
            </DataTable.Row>


            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', }}>
              <DataTable.Cell>Lost</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.lost}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.lost}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.lost}</DataTable.Cell>
            </DataTable.Row>


            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', backgroundColor: "#507E14"}}>
              <DataTable.Cell>No Result</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.no_result}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.no_result}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.no_result}</DataTable.Cell>
            </DataTable.Row>


            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', }}>
              <DataTable.Cell>Win Ration</DataTable.Cell>
              {props.children.t20.matches != 0  && props.children.t20.won != 0 ?
              <DataTable.Cell numeric>{winRation(props.children.t20.matches, props.children.t20.won)}</DataTable.Cell>
              :
              <DataTable.Cell numeric>0.0</DataTable.Cell>
              }
              {props.children.oneday.matches != 0 && props.children.oneday.won != 0 ?
              <DataTable.Cell numeric>{winRation(props.children.oneday.matches, props.children.oneday.won)}</DataTable.Cell>
              :
              <DataTable.Cell numeric>0.0</DataTable.Cell>
              }
              {props.children.test.matches != 0 && props.children.test.won != 0 ?
              <DataTable.Cell numeric>{winRation(props.children.test.matches, props.children.test.won)}</DataTable.Cell>
              :
              <DataTable.Cell numeric>0.0</DataTable.Cell>
              }
            </DataTable.Row >

          </DataTable>

        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        color: "#507E14",
        fontWeight: 'bold'
    }
})

export default PlayerStats;