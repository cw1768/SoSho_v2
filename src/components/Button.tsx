import { Text, View, Image, TextInput, Pressable } from 'react-native';

type ButtonProps = {
    title: string;
    // Question mark indicates optional
    onPress?: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            className="bg-blue-500 w-full p-3 items-center rounded-md"
        >
        <Text className="text-white font-semibold">{ title }</Text>
        </Pressable>
    );
}