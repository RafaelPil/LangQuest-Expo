import { Image, StatusBar, Text, View } from 'react-native';
import ImageOption from '~/components/ImageOption';

export default function Home() {
  return (
    <View className="flex flex-1 items-center justify-center p-3">
      <StatusBar animated barStyle={'light-content'} />
      <Text className="items-stretch font-bold">fafa</Text>

      <ImageOption />
    </View>
  );
}
