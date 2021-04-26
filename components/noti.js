import { useEffect } from 'react'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import expoPushTokenApi from '../api/expoPushToken';

const registerForPushNotifications = async () => {
    try {
        const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!permission.granted) return;
        const token = await Notifications.getExpoPushTokenAsync();
        console.log(token)
        expoPushTokenApi.register(token)
    } catch (err){
        console.log('Error getting a token', error)
    }
}

const AppNavigator = () => {
    useEffect(() => {
        registerForPushNotifications();
    }, [])
}

export default AppNavigator