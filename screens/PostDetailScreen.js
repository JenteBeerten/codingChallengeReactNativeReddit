import React from 'react';
import { WebView } from 'react-native-webview';

const PostDetailScreen = props => {
    var permalink = props.navigation.getParam('permalink');

  return(
        <WebView source={{ uri: 'https://www.reddit.com/' + permalink }} />
    );

};


PostDetailScreen.navigationOptions = {
    headerTitle: 'Post detail'
};

export default PostDetailScreen;