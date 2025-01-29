import {FC, useCallback, useState} from 'react';
import {FlatList, ViewToken} from 'react-native';
import {Models} from 'react-native-appwrite';
import {TrendingItem} from './TrendingItem';

interface IProps {
  posts: Models.Document[] | undefined;
}

const Trending: FC<IProps> = ({posts}) => {
  const [activeItem, setActiveItem] = useState(
    () => posts?.[0]?.id || undefined,
  );

  const handleViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: ViewToken<Models.Document>[]}) => {
      console.log('viewableItems', viewableItems);
      if (viewableItems.length > 0) {
        setActiveItem(viewableItems?.[0]?.item?.$id);
      }
    },
    [setActiveItem],
  );
  console.log('activeItem', activeItem);
  console.log('posts', posts);
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item?.id}
      horizontal
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{x: 170, y: 0}}
      onViewableItemsChanged={handleViewableItemsChanged}
      renderItem={({item}) => (
        <TrendingItem activeVideo={activeItem} video={item} />
      )}
    />
  );
};

export default Trending;
