import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Button from '~/src/components/Button';
import { upload } from 'cloudinary-react-native';
import { cld, uploadImageToCloudinary } from '~/src/lib/cloudinary';
import { UploadApiResponse } from 'cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params';

export default function CreatePost() {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState<string | null>(null);

    // called when CreatePost is rendered
    useEffect(() => {
        // if there is no image
        if(!image){
            pickImage();
        }
        // image is a dependency
    }, [image]);


    // launch image picker
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const createPost = async () => {
        if (!image) {
            return;
        }
        // upload image to cloudinary
        const response = await uploadImageToCloudinary(image);

        // save the post into database
        console.log("image id: ", response!.public_id);
    }
    
    return (
        // <View className="p-3 items-center">
        <View className="p-3 items-center flex-1">
            {/* Image Picker */}
            {image ? (
                <Image
                    source={{
                        uri: image
                    }}
                    className="w-52 aspect-[3/4] rounded-lg"
                >
                </Image>
            ) : (
                <View className="w-52 aspect-[3/4] rounded-lg" bg-slate-300></View>
            )}

            {/* Edit button for image picker */}
            <Text onPress={pickImage} className='text-blue-500 font-semibold m-5'>Change</Text>

            {/* TextInput for caption*/}
            <TextInput
                value={caption}
                onChangeText={(newValue) => setCaption(newValue)}
                placeholder="What is on your mind"
                className="bg-white-500 w-full p-3"
            >
            </TextInput>

            {/* Button */}
            <View className="mt-auto w-full">
                <Button title="Share Post" onPress={createPost}></Button>
            </View>
        </View>
    );
}