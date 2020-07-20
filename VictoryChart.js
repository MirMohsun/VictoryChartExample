import React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryLabel,
  VictoryArea,
} from 'victory-native';
import {View, Button} from 'react-native';

const ChartArea = ({navigation}) => {
  const data = [
    {x: 1, y: 1000},
    {x: 2, y: 1800},
    {x: 3, y: 1400},
    {x: 4, y: 2100},
    {x: 5, y: 3400},
    {x: 6, y: 500},
    {x: 7, y: 800},
    {x: 8, y: 700},
    {x: 9, y: 800},
    {x: 10, y: 470},
    {x: 11, y: 200},
    {x: 12, y: 600},
    {x: 13, y: 200},
    {x: 14, y: 3100},
    {x: 15, y: 400},
    {x: 16, y: 3100},
    {x: 17, y: 400},
    {x: 18, y: 3500},
    {x: 19, y: 800},
    {x: 20, y: 700},
    {x: 21, y: 2800},
    {x: 22, y: 470},
    {x: 23, y: 200},
    {x: 24, y: 900},
    {x: 25, y: 200},
    {x: 26, y: 100},
    {x: 27, y: 400},
    {x: 28, y: 1000},
    {x: 29, y: 2400},
    {x: 30, y: 1500},
    {x: 31, y: 2800},
    {x: 32, y: 2700},
    {x: 33, y: 800},
    {x: 34, y: 470},
    {x: 35, y: 2000},
    {x: 36, y: 550},
    {x: 37, y: 200},
    {x: 38, y: 100},
    {x: 39, y: 400},
    {x: 40, y: 100},
    {x: 41, y: 400},
    {x: 42, y: 500},
    {x: 43, y: 1800},
    {x: 44, y: 350},
    {x: 45, y: 600},
    {x: 46, y: 600},
    {x: 47, y: 2600},
    {x: 48, y: 2600},
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
      <View
        style={{
          width: '80%',
          backgroundColor: 'red',
        }}>
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
          <VictoryArea
            animate={{
              duration: 2000,
              onLoad: {duration: 2000},
            }}
            style={{
              data: {fill: '#77C1BC'},
            }}
            interpolation="basis"
            data={data}
          />
          <VictoryAxis
            minDomain={{x: 0, y: 0}}
            maxDomain={{x: 48, y: 3500}}
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
                style={{
                  fontWeight: 'lighter',
                  fontSize: 18,
                  fill: '#79838A',
                  stroke: '#79838A',
                }}
                dx={95}
                dy={5}
              />
            }
          />
        </VictoryChart>
      </View>
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
          maxDomain={{x: 48, y: 3500}}
          tickValues={[1000, 2250, 3500]}
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
        title="Go to VictoryLine"
        onPress={() => navigation.navigate('VictoryChart2')}
      />
    </>
  );
};
export default ChartArea;
