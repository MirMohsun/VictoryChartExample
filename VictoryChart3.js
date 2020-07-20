import React from 'react';
import {View, Button, ScrollView, Dimensions} from 'react-native';
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
  VictoryLabel,
  VictoryBar,
} from 'victory-native';

export const datas = [
  {y: 170, x: -5},
  {y: 170, x: 20},
  {y: 200, x: 45},
  {y: 205, x: 70},
  {y: 180, x: 95},
  {y: 215, x: 120},
  {y: 225, x: 155},
  {y: 215, x: 180},
  {y: 215, x: 205},
  {y: 215, x: 230},
  {y: 230, x: 255, label: '230'},
];

const chartWidth = Dimensions.get('window').width;
const chartHeight = Dimensions.get('window').height;

const CustomVictoryChart = ({navigation}) => {
  return (
    <View
      style={{
        width: chartWidth,
        height: chartHeight,
      }}>
      <ScrollView>
        <View
          style={{
            width: chartWidth,
            height: chartHeight / 4,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            paddingTop: 10,
          }}>
          <VictoryChart
            animate={{duration: 3000}}
            minDomain={{x: 0, y: 130}}
            padding={{left: 0, top: 0, right: 10}}
            domainPadding={30}
            height={chartHeight / 4.5}
            width={chartWidth * 0.9}>
            <VictoryLine
              animate={{duration: 3000}}
              style={{
                data: {
                  stroke: '#77C1BC',
                  strokeWidth: 1.5,
                },
              }}
              interpolation="linear"
              data={datas}
            />
            <VictoryAxis
              style={{
                axis: {stroke: 'transparent'},
                tickLabels: {fill: 'none'},
              }}
            />
            <VictoryBar
              animate={{duration: 3000}}
              style={{data: {fill: 'rgba(255, 255, 255, 0.1)', width: 1}}}
              data={datas}
            />
            <VictoryScatter
              style={{
                data: {
                  fill: ({datum}) => (datum.label === '230' ? '#fff' : '#000'),
                  stroke: ({datum}) =>
                    datum.label === '230' ? '#fff' : '#77C1BC',
                  fillOpacity: ({datum}) => (datum.label === '230' ? 1 : 0.7),
                  strokeWidth: 1.5,
                },
              }}
              size={4}
              data={datas}
              labels={({datum}) => datum.label}
              labelComponent={
                <VictoryLabel
                  dx={35}
                  dy={0}
                  textAnchor="end"
                  style={{fill: '#fff', fontSize: 16}}
                />
              }
            />
          </VictoryChart>
        </View>
        <View style={{top: 80}}>
          <Button
            title="Go to VictoryChart2"
            onPress={() => navigation.navigate('VictoryChart2')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomVictoryChart;
