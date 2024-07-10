import axios from 'axios';
import {Alert} from 'react-native';
import { useIsAndroid } from '../utils/methods';

axios.defaults.baseURL = useIsAndroid ? 'http://10.0.2.2:8080/' : 'http://localhost:8080/';
axios.defaults.headers['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => {
  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      //
    }

    if (error.code === 'ERR_NETWORK') {
      console.log("Error de red");
      // Alert.alert('Error', 'Error de red', [
      //   {
      //     text: 'Aceptar',
      //     onPress: () => console.log(),
      //   },
      // ]);
    }

    return Promise.reject(error);
  },
);

const https = axios;

export default https;
