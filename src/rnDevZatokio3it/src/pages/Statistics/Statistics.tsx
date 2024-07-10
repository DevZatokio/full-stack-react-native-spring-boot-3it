import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  processColor,
} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import CustomText from '../../customs/CustomText';
import {useEffect, useState} from 'react';
import {PropsNavigationFunctionComponent} from '../../interfaces';
import https from '../../hooks/https';
import {Colors} from '../../configs';
import {BarChart, PieChart} from 'react-native-charts-wrapper';
import {useDimensionsScreen} from '../../utils/methods';

const PagesStatistics: NavigationFunctionComponent<
  PropsNavigationFunctionComponent
> = ({componentId, componentName}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isPie, setPie] = useState(false);

  const getStatistics = async () => {
    try {
      const response = await https.get('/survey-count-by-music-style');
      if (response.status === 200) {
        setData(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStatistics();
  }, []);

  const togglePie = () => {
    setPie(!isPie);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.light_fa}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  const onBack = () => {
    return Navigation.pop(componentId);
  };

  if (data.length === 0) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.light_fa}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomText bold center>
            No hay estadísticas disponibles
          </CustomText>
          <TouchableOpacity onPress={() => onBack()}>
            <CustomText>Realizar Encuesta</CustomText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.light_fa}}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <ScrollView style={{flex: 1, height: useDimensionsScreen.height}}>
        <View style={{flex: 1, marginHorizontal: 8, marginVertical: 8}}>
          <View
            style={{
              flex: 0,
              marginVertical: 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: !isPie ? Colors.primary : Colors.gray_light,
                padding: 16,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => togglePie()}>
              <CustomText
                bold
                center
                style={{color: isPie ? Colors.primary : Colors.white}}>
                Gráfica de barras
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: isPie ? Colors.primary : Colors.gray_light,
                padding: 16,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => togglePie()}>
              <CustomText
                bold
                center
                style={{color: !isPie ? Colors.primary : Colors.white}}>
                Gráfica de pastel
              </CustomText>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0, height: useDimensionsScreen.height / 1.5}}>
            {isPie ? (
              <PieChart
                style={{flex: 1}}
                legend={{
                  enabled: true,
                  textSize: 15,
                  textColor: processColor('#000'),

                  form: 'CIRCLE',

                  horizontalAlignment: 'CENTER',
                  verticalAlignment: 'BOTTOM',
                  orientation: 'VERTICAL',
                  wordWrapEnabled: true,
                  custom: {
                    colors: [
                      processColor('#C0FF8C'),
                      processColor('#FFF78C'),
                      processColor('#FFD08C'),
                      processColor('#8CEAFF'),
                      processColor('#FF8C9D'),
                    ],
                    labels: data.map((item: any) => {
                      return item.musicStyle;
                    }),
                  },
                }}
                logEnabled={true}
                data={{
                  dataSets: [
                    {
                      values: data.map((item: any) => {
                        return {value: item.count, label: item.musicStyle};
                      }),
                      label: 'Estadísticas por estilo musical',
                      config: {
                        color: processColor('#000'),
                        colors: [
                          processColor('#C0FF8C'),
                          processColor('#FFF78C'),
                          processColor('#FFD08C'),
                          processColor('#8CEAFF'),
                          processColor('#FF8C9D'),
                        ],
                        valueTextSize: 20,
                        valueTextColor: processColor('#000'),
                        sliceSpace: 6,
                        selectionShift: 13,
                        // xValuePosition: "OUTSIDE_SLICE",
                        // yValuePosition: "OUTSIDE_SLICE",
                        valueFormatter: "#.#'%'",
                        valueLineColor: processColor('green'),
                        valueLinePart1Length: 0.5,
                      },
                    },
                  ],
                }}
              />
            ) : (
              <BarChart
                style={{flex: 1}}
                data={{
                  dataSets: data.map((item: any) => {
                    return {
                      label: item.musicStyle,
                      values: data.map((value: any) => {
                        if (item.musicStyle === value.musicStyle) {
                          return {
                            y: value.count,
                            marker: value.musicStyle,
                          };
                        }
                      }),
                      config: {
                        color: processColor(Colors.blue),
                        colors: [
                          processColor(Colors.primary),
                          processColor(Colors.info),
                          processColor(Colors.success),
                          processColor(Colors.secondary),
                          processColor(Colors.danger),
                        ],
                      },
                    };
                  }),
                }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

PagesStatistics.options = {
  topBar: {
    title: {
      text: 'Estadísticas',
    },
  },
};

export default PagesStatistics;
