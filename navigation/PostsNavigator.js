import React from 'react';
import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../screens/MainScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import Colors from '../constants/Colors';

const headerStyling = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const PostsNavigator = createStackNavigator(
    {
        Main: {
            screen: MainScreen
        },
        Detail: {
            screen: PostDetailScreen
        }
    },
    {
        defaultNavigationOptions: headerStyling
    }
);

export default createAppContainer(PostsNavigator);


