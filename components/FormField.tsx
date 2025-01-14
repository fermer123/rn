import {icons} from '@/constants';
import {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';

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
    <View className={`flex-1 gap-3 ${styles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='flex-row gap-5 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center'>
        <TextInput
          className='text-white  font-psemibold text-base w-full'
          value={value}
          onChangeText={(text) => onChange(text, name)}
          placeholder={placeholder}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              className='w-6 h-6'
              resizeMode='contain'
              source={showPassword ? icons.eyeHide : icons.eye}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
