import { View, Image, Text, useWindowDimensions } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'
import { AdvancedImage } from 'cloudinary-react-native';
import { cld } from "~/src/lib/cloudinary";
import {text} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

export default function PostListItem({ post }) {
    // cld.image returns a CloudinaryImage with the configuration set.
    const image = cld.image(post.image);

    const { width } = useWindowDimensions();
    console.log('Width: ', width);

    // Apply the transformation.
    image.resize(thumbnail().width(width).height(width));  // Crop the image, focusing on the face.

    const avatar = cld.image(post.user.avatar_url);
    avatar.resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face()))); 

    return(
        <View className="bg-white">
            <View className="p-3 flex-row items-center gap-2">
                {/* <Image 
                    source={{ uri: post.user.image_url }} 
                    className="w-16 aspect-square rounded-full">
                </Image> */}
                <AdvancedImage 
                    cldImg={avatar} 
                    className="w-12 aspect-square rounded-full">
                </AdvancedImage>
                <Text className="font-semibold text-xl">{post.user.username}</Text>
            </View>

            {/* Post content */}
            <AdvancedImage cldImg={image} className="w-full aspect-square"></AdvancedImage>
            {/* <Image 
                source={{ uri: post.image_url }} 
                className="w-full aspect-square">
            </Image> */}

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