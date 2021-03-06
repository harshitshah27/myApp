import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import TabView from './TabView';
import ListingItems from './ListingItems';
function Dashboard() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    console.log('inside useffect');
    const body = {
      CategoryId: 0,
      DeviceManufacturer: 'Google',
      DeviceModel: 'Android SDK built for x86',
      DeviceToken: ' ',
      PageIndex: 1,
    };
    axios
      .post('http://esptiles.imperoserver.in/api/API/Product/DashBoard', body)
      .then((res) => {
        // console.log('res', res);
        setdata(res.data.Result.Category);
      })
      .catch((err) => console.log('err', err));
  }, []);
  console.log('data', data);
  return (
    <>
      <View style={styles.container}>
        <Text> Esp tiles</Text>
      </View>
      <TabView data={data} />
      {/* <ListingItems data={data} /> */}
    </>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
