import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { Card, Image } from 'react-native-elements';

const ListingItems = (props) => {
  const { data } = props;
  console.log('data[0]', data[0]);
  const { SubCategories } = data[0];
  console.log('SubCategories', SubCategories);

  return (
    <SafeAreaView style={styles.container}>
      {data &&
        data.map((item) => {
          console.log('item ', item);
          return (
            <Card containerStyle={styles.card}>
              <Image
                style={styles.image}
                resizeMode="cover"
                // source={{ uri: subitem.ImageName }}
              />
            </Card>
          );
        })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  card: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 32,
  },
});

export default ListingItems;
