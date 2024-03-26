import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RoundTable } from 'components/RoundTable';
import { FlatList } from 'react-native-gesture-handler';
import { FlashList } from '@shopify/flash-list';

//@ ---> Matches Page
const Matches = () => {
  // const { user } = useSelector((state) => state.user);
  const [res, setRes] = useState({});

  const fetch = async () => {
    const { data } = await axios.get(
      'http://api.football-data.org/v4/competitions/PL/matches/?matchday=28',
      { headers: { 'X-Auth-Token': 'e44e55e51d5242b8b5d8ac92af329d46' } }
    );
    setRes(data.matches);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'grey' }}>
        <Text style={{ fontSize: 24 }}>32</Text>
        <Text style={{ fontSize: 24 }}>Matches</Text>
        <View style={{ padding: 10, marginTop: 15 }}>
          <FlatList
            data={res}
            renderItem={({ item }) => <RoundTable round={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Matches;
