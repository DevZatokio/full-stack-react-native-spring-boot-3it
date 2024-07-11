import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {SafeAreaView, StatusBar, TouchableOpacity, View} from 'react-native';
import CustomText from './src/customs/CustomText';
import {Colors} from './src/configs';
import { PropsNavigationFunctionComponent } from './src/interfaces';

const App: NavigationFunctionComponent<PropsNavigationFunctionComponent> = ({componentId, componentName}) => {


  const onPressSurvey = () => {
    return Navigation.push(componentId, {
      component: {
        name: 'Survey'
      }
    });
  }
  const onPressStatistics = () => {
    return Navigation.push(componentId, {
      component: {
        name: 'Statistics'
      }
    });
  }
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.light_fa}}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={{flex: 1, justifyContent: 'space-around', marginHorizontal: 16}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => onPressSurvey()} style={{ backgroundColor: Colors.success, padding: 16, borderRadius: 12}}>
            <CustomText white center bold xxl>Encuesta</CustomText>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => onPressStatistics()} style={{backgroundColor: Colors.info, padding: 16, borderRadius: 12}}>
            <CustomText white center bold xxl>Estadística</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'Bienvenido',
      color: Colors.black
    },
  },
};

export default App;
