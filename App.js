import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {WebView} from 'react-native-webview';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  console.log(isConnected);
  return (
    <SafeAreaView style={{flex: 1}}>
      {isConnected ? (
        <WebView
          source={{uri: 'https://www.pizzeriaenjoy.com/'}}
          ignoreSslError={true}
          cacheEnabled={false}
        />
      ) : (
        <View>
          <Text>No Internet Available</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
