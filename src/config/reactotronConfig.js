import Reactotron from 'reactotron-react-native';
import {NativeModules, AsyncStorage} from 'react-native';


if(__DEV__){
  const tron = Reactotron
    .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({ host: '192.168.15.6' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect()

  console.tron = tron;

  tron.clear();
}
