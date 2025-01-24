import {icons} from '@/constants';
import {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';

interface IProps {
  value: string;
  onChange: (e: string) => void;
  onPress: () => void;
  placeholder?: string;
  keyboardType?: string;
  styles?: string;
}

const SearchInput = <T,>({
  value,
  onChange,
  styles,
  placeholder,
  onPress,
}: IProps) => {
  return (
    <View className={`flex-1 gap-3 ${styles}`}>
      <View className='flex-row gap-5 w-full h-16 pl-4 pr-5 bg-black-100 rounded-2xl focus:border-secondary items-center'>
        <TextInput
          className=' text-white w-full font-psemibold text-base placeholder:color-gray-100'
          value={value}
          onChangeText={(text) => {
            onChange(text);
            console.log('text', text);
          }}
          placeholder={placeholder}
        />

        <TouchableOpacity onPress={onPress}>
          <Image
            style={{width: 15, height: 15}}
            resizeMode='contain'
            source={icons.search}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
