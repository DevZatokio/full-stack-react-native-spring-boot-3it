import {
  ActivityIndicator,
  SafeAreaView,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import CustomText from '../../customs/CustomText';
import {PropsNavigationFunctionComponent} from '../../interfaces';
import {useForm} from 'react-hook-form';
import CustomInput from '../../customs/CustomInput';
import {Colors} from '../../configs';
import {DropdownStyles} from '../../styles/dropdown';
import CustomDropDown from '../../customs/CustomDropDown';
import {useEffect, useState} from 'react';
import https from '../../hooks/https';
import {IMusicStyle} from '../../models/music_style';

const PagesSurvey: NavigationFunctionComponent<
  PropsNavigationFunctionComponent
> = ({componentId, componentName}) => {
  const [music_styles, setMusicStyles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMusicStyles = async () => {
      try {
        const response = await https.get('/music-style');
        if (response.status === 200) {
          console.log(response.data);
          setMusicStyles(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getMusicStyles();
  }, []);

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      email: '',
      style_music: '',
    },
  });

  if (isLoading) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.light_fa}}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  const onSubmit = async (data: any) => {
    try {
      const response = await https.post('/survey', {
        email: data.email,
        musicStyle: {
          id: data.style_music,
        }
      });
      if (response.status === 200) {
        console.log(response.data);
        reset({email: '', style_music: ''});
        Navigation.push(componentId, {
          component: {
            name: 'Statistics',
            passProps: {
              componentId,
              componentName,
            },
          },
        });
      }
    } catch (error: any) {
      console.log(error);
      if(error.response.status === 400) {
        Alert.alert('Error', 'El correo electrónico ya se encuentra registrado', [
          {
            text: 'Aceptar',
            onPress: () => console.log(),
          }
        ]);
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.light_fa}}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={{marginHorizontal: 16, marginVertical: 32}}>
        <View style={{marginBottom: 8}}>
          <CustomText bold mdx black style={{marginBottom: 8}}>
            Estilo musical
          </CustomText>
          <CustomDropDown
            control={control}
            name="style_music"
            styleBox={{}}
            items={music_styles.map((style: IMusicStyle) => ({
              label: style.name,
              value: style.id,
            }))}
            style={{
              inputAndroid: DropdownStyles.android,
              inputIOS: DropdownStyles.ios,
            }}
            rules={{
              required: 'Estilo musical requerido',
            }}
            colorError={Colors.danger}
            placeholder={{label: 'Seleccionar estilo musical', value: null}}
          />
        </View>
        <View style={{marginBottom: 8}}>
          <CustomText bold mdx black style={{marginBottom: 8}}>
            Correo Electrónico
          </CustomText>
          <CustomInput
            control={control}
            name="email"
            placeholder="Ingresar correo electrónico"
            placeholderTextColor={Colors.black}
            rules={{
              required: 'Correo electrónico requerido',
            }}
            lowercase
            keyboardType="email-address"
            styleBox={{
              backgroundColor: Colors.white,
              paddingVertical: 4,
              paddingHorizontal: 12,
              borderRadius: 12,
            }}
            colorError={Colors.danger}
          />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{
              backgroundColor: Colors.primary,
              padding: 16,
              borderRadius: 12,
              marginTop: 16,
            }}>
            <CustomText white bold xxl center>
              Guardar
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

PagesSurvey.options = {
  topBar: {
    title: {
      text: 'Encuesta',
    },
  },
};

export default PagesSurvey;
