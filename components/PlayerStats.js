import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';


function PlayerStats (props) {

    const average = (matches, runs) => {
        let result = (runs/matches).toFixed(2);
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
              <DataTable.Cell>Runs</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.runs}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.runs}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.runs}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', }}>
              <DataTable.Cell>Average</DataTable.Cell>
              {props.children.t20.matches != 0  && props.children.t20.out != 0 ?
              <DataTable.Cell numeric>{average(props.children.t20.out, props.children.t20.runs)}</DataTable.Cell>
              :
              <DataTable.Cell numeric>0.0</DataTable.Cell>
              }
              {props.children.oneday.matches != 0 && props.children.oneday.out != 0 ?
              <DataTable.Cell numeric>{average(props.children.oneday.out, props.children.oneday.runs)}</DataTable.Cell>
              :
              <DataTable.Cell numeric>0.0</DataTable.Cell>
              }
              {props.children.test.matches != 0 && props.children.test.out != 0 ?
              <DataTable.Cell numeric>{average(props.children.test.out, props.children.test.runs)}</DataTable.Cell>
              :
              <DataTable.Cell numeric>0.0</DataTable.Cell>
              }
            </DataTable.Row >

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', backgroundColor: "#507E14"}}>
              <DataTable.Cell>Strike Rate</DataTable.Cell>
              {props.children.t20.matches != 0  && props.children.t20.balls != 0 ?
              <DataTable.Cell numeric>{strikeRate(props.children.t20.balls, props.children.t20.runs)}</DataTable.Cell>
              :
              <DataTable.Cell numeric>0.0</DataTable.Cell>
              }
              {props.children.t20.matches != 0  && props.children.oneday.balls != 0 ?
              <DataTable.Cell numeric>{strikeRate(props.children.oneday.balls, props.children.oneday.runs)}</DataTable.Cell>
              :
              <DataTable.Cell numeric>0.0</DataTable.Cell>
              }
              {props.children.t20.matches != 0  && props.children.test.balls != 0 ?
              <DataTable.Cell numeric>{strikeRate(props.children.test.balls, props.children.test.runs)}</DataTable.Cell>
              :
              <DataTable.Cell numeric>0.0</DataTable.Cell>
              }
            </DataTable.Row>

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', }}>
              <DataTable.Cell>Thirties</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.thirties}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.thirties}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.thirties}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', backgroundColor: "#507E14"}}>
              <DataTable.Cell>Fifties</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.fifties}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.fifties}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.fifties}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', }}>
              <DataTable.Cell>Centuries</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.centuries}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.centuries}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.centuries}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center',backgroundColor: "#507E14"}}>
              <DataTable.Cell>4's</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.fours}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.fours}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.fours}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', }}>
              <DataTable.Cell>6's</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.sixes}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.sixes}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.sixes}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{justifyContent: 'center', alignItems: 'center', backgroundColor: "#507E14"}}>
              <DataTable.Cell>H/s</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.t20.highest}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.oneday.highest}</DataTable.Cell>
              <DataTable.Cell numeric>{props.children.test.highest}</DataTable.Cell>
            </DataTable.Row>

            {/* <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={page => {
                console.log(page);
              }}
              label="1-2 of 6"
            /> */}
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