import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './popularjobs.style';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import { SIZES } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import LottieView from 'lottie-react-native'
const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search', {
    query: 'Python developer in Texas, USA',
    num_pages: 1,
  });
  console.log('🚀 ~ file: Popularjobs.jsx:17 ~ Popularjobs ~ data:', data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={item}
                handleCardPress={() => {}}
              />
            )}
            keyExtractor={item => item?.jobs_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            key={item => item?.jobs_id}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
