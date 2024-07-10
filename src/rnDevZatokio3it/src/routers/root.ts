import { Navigation, LayoutRoot } from 'react-native-navigation';
import App from '../../App';
import PagesSurvey from '../pages/Survey/Survey';
import PagesStatistics from '../pages/Statistics/Statistics';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Survey', () => PagesSurvey)
Navigation.registerComponent('Statistics', () => PagesStatistics)

const Root :LayoutRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'App'
          }
        },
      ]
    },
  }
}

export default Root;