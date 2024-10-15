import { Text, View, Image, TextInput } from 'react-native';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import Button from '~/src/components/Button';

export default function Profile() {
    const [image, setImage] = useState<string | null>(null);
    const [username, setUsername] = useState("");

    // launch image picker
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return(
        <View className="p-3 flex-1">
            {/* Image picker */}
            {image ? (
                <Image
                    source={{
                        uri: image
                    }}
                    className="w-52 aspect-square self-center rounded-full bg-slate-300"
                >
                </Image>
            ) : (
                <View className="w-52 aspect-square self-center rounded-full bg-slate-300"></View>
            )}
            <Text onPress={pickImage} className="text-blue-500 font-semibold m-5 self-center">Change</Text>

            {/* Form */}
            <Text className="mb-2 text-grey-500 font-semibold">Username</Text>
            <TextInput
                placeholder="Username"
                value={username}
                className="border border-gray-300 p-3 rounded-md"
                >
                </TextInput>


            {/* Button */}
            <View className="gap-2 mt-auto">
                <Button title="Update profile"></Button>
                <Button title="Sign out"></Button>
            </View>
        </View>
    );
}