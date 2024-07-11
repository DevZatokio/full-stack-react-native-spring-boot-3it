
import 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import Root from './src/routers/root';

export default Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(Root)
});