import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { COLORS, FONT, SIZES, icons, images } from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import Welcome from '../components/home/welcome/Welcome';
import Nearbyjobs from '../components/home/nearby/Nearbyjobs';
import Popularjobs from '../components/home/popular/Popularjobs';

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite ,paddingHorizontal:10}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
          headerRight: () => {
            return <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />;
          },
          headerTitle: '',
        }}
      />
      <ScrollView>
        <View>
            <Welcome/>
            <Popularjobs/>
            <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
