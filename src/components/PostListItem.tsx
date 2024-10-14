import { View, Image, Text } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'

export default function PostListItem({ post }) {
    return(
        <View className="bg-white">
            <View className="p-3 flex-row items-center gap-2">
                <Image 
                    source={{ uri: post.user.image_url }} 
                    className="w-16 aspect-square rounded-full">
                </Image>
                <Text className="font-semibold text-xl">{post.user.username}</Text>
            </View>
            <Image 
                source={{ uri: post.image_url }} 
                className="w-full aspect-square">
            </Image>

            {/* Icons */}
            <View className="flex-row gap-3 p-3">
                <AntDesign name="hearto" size={20}></AntDesign>
                <Ionicons name="chatbubble-outline" size={20}></Ionicons>
                <Feather name="send" size={20}></Feather>

                <Feather name="bookmark" size={20} className="ml-auto"></Feather>
            </View>
        </View>
    );
}