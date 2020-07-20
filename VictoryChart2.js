import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryLabel,
} from 'victory-native';
import {View, Button} from 'react-native';

const ChartLine = ({navigation}) => {
  const getTimeText = (value) => {
    switch (value) {
      case 90:
        return '3 hr';
      case 60:
        return '1 hr';
      case 30:
        return '30 min';
      default:
        return '5 min';
    }
  };

  const data = [
    {x: 1, y: 100},
    {x: 2, y: 10},
    {x: 3, y: 40},
    {x: 4, y: 10},
    {x: 5, y: 40},
    {x: 6, y: 50},
    {x: 7, y: 80},
    {x: 8, y: 70},
    {x: 9, y: 80},
    {x: 10, y: 47},
    {x: 11, y: 20},
    {x: 12, y: 60},
    {x: 13, y: 20},
    {x: 14, y: 10},
    {x: 15, y: 40},
    {x: 16, y: 10},
    {x: 17, y: 40},
    {x: 18, y: 50},
    {x: 19, y: 80},
    {x: 20, y: 70},
    {x: 21, y: 80},
    {x: 22, y: 47},
    {x: 23, y: 20},
    {x: 24, y: 90},
    {x: 25, y: 20},
    {x: 26, y: 10},
    {x: 27, y: 40},
    {x: 28, y: 10},
    {x: 29, y: 40},
    {x: 30, y: 50},
    {x: 31, y: 80},
    {x: 32, y: 70},
    {x: 33, y: 80},
    {x: 34, y: 47},
    {x: 35, y: 20},
    {x: 36, y: 55},
    {x: 37, y: 20},
    {x: 38, y: 10},
    {x: 39, y: 40},
    {x: 40, y: 10},
    {x: 41, y: 40},
    {x: 42, y: 50},
    {x: 43, y: 80},
    {x: 44, y: 35},
    {x: 45, y: 60},
    {x: 46, y: 60},
    {x: 47, y: 60},
    {x: 48, y: 60},
  ];

  const tickX = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 44];
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  return (
    <>
      <VictoryChart
        padding={{left: 0, right: 0, top: 50, bottom: 40}}
        width={600}
        height={300}
        domainPadding={{x: [20, 0]}}
        domain={{x: [1, 60]}}
        standalone={true}
        containerComponent={
          <VictoryZoomContainer
            width={600}
            allowZoom={false}
            zoomDomain={{x: [35, 57]}}
          />
        }>
        <VictoryLine
          animate={{
            duration: 2000,
            onLoad: {duration: 2000},
          }}
          interpolation="basis"
          style={{
            data: {stroke: '#04C3F9', strokeWidth: 5},
          }}
          data={data.map((item) =>
            item.y > 60 ? {x: item.x, y: (item.y - 60) / 4 + 60} : item,
          )}
        />
        <VictoryAxis
          minDomain={{x: 0, y: 0}}
          maxDomain={{x: 48, y: 90}}
          tickValues={data.map((item) => item.x)}
          tickFormat={(t) =>
            tickX.includes(t) ? months[tickX.indexOf(t)] : null
          }
          style={{
            axis: {stroke: 'transparent'},
            grid: {stroke: '#E5E5E5'},
          }}
          tickLabelComponent={
            <VictoryLabel
              style={{fontWeight: 'lighter', fontSize: 18, stroke: '#79838A'}}
              dx={105}
              dy={5}
            />
          }
        />
        <VictoryAxis
          dependentAxis
          orientation="right"
          tickValues={[5, 30, 60, 90]}
        />
      </VictoryChart>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8);',
          width: 80,
          height: '51%',
          position: 'absolute',
          right: 0,
        }}>
        <VictoryAxis
          dependentAxis
          minDomain={{x: 0, y: 0}}
          maxDomain={{x: 48, y: 90}}
          tickValues={[5, 30, 60, 90]}
          tickFormat={(t) => getTimeText(t)}
          tickLabelComponent={
            <VictoryLabel
              style={{fontWeight: 'lighter', fontSize: 18, stroke: '#79838A'}}
              dy={-15}
              dx={70}
            />
          }
          style={{
            axis: {stroke: 'transparent'},
            ticks: {stroke: '#79838A', size: 35},
            grid: {stroke: '#79838A'},
          }}
        />
      </View>
      <Button
        title="Go to CustomChart"
        onPress={() => navigation.navigate('VictoryChart3')}
      />
    </>
  );
};
export default ChartLine;
