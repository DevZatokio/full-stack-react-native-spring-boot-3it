import 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {fireEvent, render} from '@testing-library/react-native';
import App from '../App'; // Asegúrate de ajustar la ruta según la ubicación real de tu componente


import axios from 'axios';
import https from '../src/hooks/https'; // Suponiendo que 'https' es tu instancia de axios configurada
import { Alert } from 'react-native';

import { useIsAndroid, useIsIOS, usePlatformOS } from '../src/utils/methods';
import { Platform } from 'react-native';




jest.mock('axios'); // Mockear axios para controlar las llamadas
describe('Axios Tests', () => {
  test('fetch data successfully', async () => {
    // Mock de datos de respuesta exitosa
    const mockData = { id: 1, name: 'Survey Data' };
    const mockResponse = { status: 200, data: mockData };

    // Configurar Axios para devolver la respuesta simulada
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(mockResponse);

    // Llamar a la función que realiza la solicitud HTTP
    const response = await https.get('/survey-count-by-music-style');

    // Verificar que la función setData se haya llamado con los datos simulados
    expect(response.data).toEqual(mockData);
  });
});




// describe('Platform Tests', () => {
//   test('check useIsAndroid', () => {
//     // Simular una plataforma Android
//     jest.spyOn(Platform, 'OS', 'get').mockReturnValue('android');

//     // Verificar que useIsAndroid sea verdadero para Android
//     expect(useIsAndroid).toBe(true);
//     expect(useIsIOS).toBe(false);
//     expect(usePlatformOS).toBe('android');
//   });

//   test('check useIsIOS', () => {
//     // Simular una plataforma iOS
//     jest.spyOn(Platform, 'OS', 'get').mockReturnValue('ios');

//     // Verificar que useIsIOS sea verdadero para iOS
//     expect(useIsAndroid).toBe(false);
//     expect(useIsIOS).toBe(true);
//     expect(usePlatformOS).toBe('ios');
//   });
// });


// jest.mock('react-native', () => ({
//   Alert: {
//     alert: jest.fn(),
//   },
// }));

// describe('Axios Error Handling Tests', () => {
//   test('handle network error', async () => {
//     // Simular un error de red
//     const mockError = { code: 'ERR_NETWORK' };

//     // Configurar Axios para devolver el error simulado
//     (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(mockError);

//     // Llamar a la función que realiza la solicitud HTTP
//     try {
//       await https.get('/survey-count-by-music-style');
//     } catch (error) {
//       // Verificar que setIsLoading se haya llamado con false
//       // Esto asume que setIsLoading es una función mockeada o spy que puedes verificar
//       // expect(setIsLoading).toHaveBeenCalledWith(false);

//       // Verificar que se haya mostrado una alerta de error de red
//       expect(Alert.alert).toHaveBeenCalledWith('Error', 'Error de red', [
//         { text: 'Aceptar', onPress: expect.any(Function) }
//       ]);
//     }
//   });
// });

// describe('App', () => {
//   it('renders correctly', () => {
//     const { getByText } = render(<App componentId="testComponentId" componentName="App" />);
//     expect(getByText('Bienvenido')).toBeDefined();
//   });

//   it('navigates to Survey screen when "Encuesta" button is pressed', async () => {
//     const mockNavigationPush =  jest.fn().mockImplementation((componentId, options) => {
//       return Promise.resolve('screenId');
//     });
//     jest.spyOn(Navigation, 'push').mockImplementation(mockNavigationPush);

//     const { getByText } = render(<App componentId="testComponentId" componentName="App" />);
//     fireEvent.press(getByText('Encuesta'));

//     // Esperamos a que la navegación se resuelva
//     await Promise.resolve();

//     expect(mockNavigationPush).toHaveBeenCalledWith('testComponentId', {
//       component: {
//         name: 'Survey'
//       }
//     });
//   });

//   it('navigates to Statistics screen when "Estadística" button is pressed', async () => {
//     const mockNavigationPush = jest.fn()
//     jest.spyOn(Navigation, 'push').mockImplementation(mockNavigationPush);

//     const { getByText } = render(<App componentId="testComponentId" componentName="App" />);
//     fireEvent.press(getByText('Estadística'));

//     // Esperamos a que la navegación se resuelva
//     await Promise.resolve();

//     expect(mockNavigationPush).toHaveBeenCalledWith('testComponentId', {
//       component: {
//         name: 'Statistics'
//       }
//     });
//   });
// });