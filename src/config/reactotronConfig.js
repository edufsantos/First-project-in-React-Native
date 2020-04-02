import Reactotron from 'reactotron-react-native';
import {NativeModules, AsyncStorage} from 'react-native';

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

if(__DEV__){
  const tron = Reactotron
    .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({ host }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect()

  console.tron = tron;

  tron.clear();
}
