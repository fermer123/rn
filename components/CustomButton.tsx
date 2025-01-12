import {FC} from 'react';
import {Text, TouchableOpacity, ViewProps} from 'react-native';

interface IProps {
  title: string;
  handlePress: () => void;
  isLoading?: boolean;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton: FC<IProps> = ({
  title,
  handlePress,
  isLoading = false,
  containerStyles,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`bg-secondary rounded-xl px-[15px] py-[8px] ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}>
      <Text
        className={`text-primary font-psemibold text-lg text-center ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
