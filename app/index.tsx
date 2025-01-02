import { Image, StatusBar, Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex flex-1 items-center justify-center p-3">
      <StatusBar animated barStyle={'light-content'} />
      <Text className="items-stretch font-bold">fafa</Text>

      <View className="w-[100%] flex-1 flex-row flex-wrap content-between justify-between">
        <View className="h-[48%] w-[48%] items-center rounded-md rounded-b-lg border-2 border-gray-200 p-2">
          <Image
            source={{
              uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png',
            }}
            className="w-[100%] flex-1"
            resizeMode="contain"
          />
          <Text>Glass</Text>
        </View>
      </View>
    </View>
  );
}
