import { Text, View, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';
import posts from '~/assets/data/posts.json'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'
import PostListItem from '~/src/components/PostListItem';

export default function FeedScreen() {
    return (
        // array of posts to render
        // data and renderItem are necessary fields. Each item in posts is passed into renderItem
        <FlatList
            data={posts}
            renderItem={({ item }) => <PostListItem post={item}></PostListItem>}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}>
        </FlatList>
    );
}