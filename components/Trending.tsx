import {FC} from 'react';
import {FlatList, Text, View} from 'react-native';

interface IProps {
  posts: any[];
}

const Trending: FC<IProps> = ({posts}) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item?.id}
      horizontal
      renderItem={({item}) => (
        <Text className='text-3xl text-gray-100'>{item.id}</Text>
      )}
    />
  );
};

export default Trending;
