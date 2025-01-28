import {FC, useState} from 'react';
import {FlatList} from 'react-native';
import {Models} from 'react-native-appwrite';
import {TrendingItem} from './TrendingItem';

interface IProps {
  posts: Models.Document[] | undefined;
}

const Trending: FC<IProps> = ({posts}) => {
  const [activeItem, setActiveItem] = useState(posts?.[1] || undefined);
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item?.id}
      horizontal
      renderItem={({item}) => (
        <TrendingItem activeVideo={activeItem} video={item} />
      )}
    />
  );
};

export default Trending;
