import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VictoryScatterAnimation from './VictoryAnimation';
import ChartArea from './VictoryChart';
import ChartLine from './VictoryChart2';
import CustomVictoryChart from './VictoryChart3';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to VictoryAnimation"
        onPress={() => navigation.navigate('VictoryChart')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="VictoryAnimation"
          component={VictoryScatterAnimation}
        />
        <Stack.Screen name="VictoryChart" component={ChartArea} />
        <Stack.Screen name="VictoryChart2" component={ChartLine} />
        <Stack.Screen name="VictoryChart3" component={CustomVictoryChart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
