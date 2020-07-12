import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <>
    <Text>First Route</Text>
  </>
);

const SecondRoute = () => (
  //   <View style={[styles.scene, { backgroundColor: 'red' }]} />
  <Text>Second Route</Text>
);

const initialLayout = { width: Dimensions.get('window').width, height: 0 };

const TabViewContainer = (props) => {
  const { data } = props;
  console.log('data', data);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const dynamicRoutes =
    data &&
    data.map((item) => {
      return { key: item.Name, title: item.Name };
    });

  console.log('dynamicRoutes', dynamicRoutes);

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

export default TabViewContainer;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
