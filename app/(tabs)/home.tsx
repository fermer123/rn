import SearchInput from '@/components/SearchInput';
import {images} from '@/constants';
import {useGlobalContext} from '@/context/GlobalContextProvider';
import {useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const {user} = useGlobalContext();
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={[{id: '1'}, {id: '2'}]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Text className='text-3xl color-secondary'>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='flex my-6 px-4 space-y-6'>
            <View className='flex justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  JSMastery
                </Text>
              </View>
              <Image
                source={images.logoSmall}
                className='mt-1.5'
                resizeMode='contain'
                style={{width: 58, height: 43}}
              />
            </View>

            <SearchInput
              onChange={setSearch}
              value={search}
              onPress={() => console.log('search,', search)}
              placeholder='Search for a video topic'
            />

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-lg font-pregular text-gray-100 mb-3'>
                Latest Videos
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
