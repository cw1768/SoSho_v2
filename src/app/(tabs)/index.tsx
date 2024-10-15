import { View, FlatList } from 'react-native';
import posts from '~/assets/data/posts.json';
import PostListItem from '~/src/components/PostListItem';

export default function Feed() {
    return (
        // array of posts to render
        // data and renderItem are necessary fields. Each item in posts is passed into renderItem

        // <View className="items-center">
        //     <FlatList
        //         data={posts}
        //         // className="items-center"
        //         renderItem={({ item }) => <PostListItem post={item}></PostListItem>}
        //         contentContainerStyle={{
        //             gap: 10,
        //             maxWidth: 512,
        //             width: '100%',
        //             backgroundColor: 'white',
        //         }}
        //         showsVerticalScrollIndicator={false}
        //     />
        // </View>

        <FlatList
            data={posts}
            // className="items-center"
            renderItem={({ item }) => <PostListItem post={item}></PostListItem>}
            contentContainerStyle={{
                gap: 10,
                maxWidth: 512,
                width: '100%',
                backgroundColor: 'white',
                alignSelf: 'center',
            }}
            showsVerticalScrollIndicator={false}
        >
        </FlatList>
    );
}