/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import {
  VictoryChart,
  VictoryScatter,
} from 'victory-native';
import {Button} from 'react-native'

const VictoryScatterAnimation = ({navigation}) => {
  const colors = [
    'violet',
    'cornflowerblue',
    'gold',
    'orange',
    'turquoise',
    'tomato',
    'greenyellow',
  ];
  const symbols = [
    'circle',
    'star',
    'square',
    'triangleUp',
    'triangleDown',
    'diamond',
    'plus',
  ];
  const [scatterData,setData] = useState([
    {
      x: Math.random(10, 50),
      y: Math.random(2, 100),
      size: Math.random(8) + 6,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      fill: colors[4],
      opacity: 1,
    },])
  const range = (number) => {
    for( var step= 0;  step < number; step++)
    {
      const data={
        x: Math.random(10, 50),
        y: Math.random(2, 100),
        size: Math.random(8) + 6,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        fill: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
      }
      scatterData.push(data)
    }
    return scatterData
  }
  
  useEffect(()=>setInterval(()=>{
    setData([])
  },3000),[])

range(25)
  return (
    <>
    <VictoryChart animate={{ duration: 2000, easing: "bounce" }}>
      {scatterData.map((item, i) => {
        return (
          <VictoryScatter
            key={i}
            data={[item]}
            size={item.size}
            style={{
              data: {
                fill: item.fill,
                opacity: item.opacity,
              },
            }}
          />
        );
      })}
    </VictoryChart>
    <Button
    title="Go to VictoryChart"
    onPress={() => navigation.navigate('VictoryChart')}
    />
    </>

  );
};

export default VictoryScatterAnimation;
