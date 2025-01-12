import {FC, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

interface IProps<T> {
  title: string;
  value: string;
  onChange: (e: string, name: T) => void;
  name: T;
  placeholder?: string;
  keyboardType?: string;
  styles?: string;
}

const FormField = <T,>({
  title,
  value,
  onChange,
  keyboardType,
  styles,
  placeholder,
  name,
}: IProps<T>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <View className={`space-y-2 ${styles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center'>
        <TextInput
          className='flex-1 text-white font-psemibold text-base w-full'
          value={value}
          onChangeText={(text) => onChange(text, name)}
          placeholder={placeholder}
          secureTextEntry={title === 'Password' && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormField;
