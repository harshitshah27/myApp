import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  //   <View style={[styles.scene, { backgroundColor: 'red' }]}>
  <Text>First Route</Text>
  //   </View>
);

const SecondRoute = () => (
  //   <View style={[styles.scene, { backgroundColor: 'red' }]} />
  <Text>Second Route</Text>
);

const initialLayout = { width: Dimensions.get('window').width, height: 0 };

const TabView = (props) => {
  console.log('props', props);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default TabView;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
