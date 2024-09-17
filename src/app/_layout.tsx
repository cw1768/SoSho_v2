/* Defines how to navigate between tabs */
import { Slot, Stack, Tabs } from 'expo-router';

export default function RootLayout(){
    return <Stack screenOptions = {{ headerShown: false }} />
}