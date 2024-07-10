import Geolocation, {GeoPosition, GeoError, GeoWatchOptions} from 'react-native-geolocation-service';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {useIsIOS} from './methods';

const GeolocationPosition = () => {
  return new Promise<Geolocation.GeoPosition | null>(async (resolve, reject) => {
    if (useIsIOS) {
      const requestAuth = await Geolocation.requestAuthorization('whenInUse');
      const requestAuthAlways = await Geolocation.requestAuthorization('always');
      if (requestAuth === 'granted' || requestAuthAlways === 'granted') {
        Geolocation.getCurrentPosition(
          position => {
            resolve(position);
          },
          error => {
            reject(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
          },
        );
      } else {
        reject(false);
      }
    } else {
      const permissions = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (permissions === RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            resolve(position);
          },
          error => {
            reject(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
          },
        );
      } else {
        console.log('request');
        const permisos = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (permisos === RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              resolve(position);
            },
            error => {
              reject(error);
            },
            {
              enableHighAccuracy: true,
              timeout: 20000,
              maximumAge: 1000,
            },
          );
        } else {
          resolve(null);
        }
      }
    }
  });
};

const GeolocationWatchPosition = (
  callback: (position: GeoPosition) => void,
  error: (error: GeoError) => void,
  options: GeoWatchOptions,
) => {
  return new Promise<number>(async (resolve, reject) => {
    if (useIsIOS) {
      const requestAuth = await Geolocation.requestAuthorization('whenInUse');
      const requestAuthAlways = await Geolocation.requestAuthorization('always');
      if (requestAuth === 'granted' || requestAuthAlways === 'granted') {
        const watch = Geolocation.watchPosition(callback, error, options);
        resolve(watch);
      } else {
        reject(false);
      }
    } else {
      const permissions = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (permissions === RESULTS.GRANTED) {
        const watch = Geolocation.watchPosition(callback, error, options);
        resolve(watch);
      } else {
        const permisos = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (permisos === RESULTS.GRANTED) {
          const watch = Geolocation.watchPosition(callback, error, options);
          resolve(watch);
        }
      }
    }
  });
};

const GeolocationWatchClear = (watchId: number) => {
  Geolocation.clearWatch(watchId);
};

const GeolocationStopObserving = () => {
  Geolocation.stopObserving();
};

export {GeolocationPosition, GeolocationWatchPosition, GeolocationWatchClear, GeolocationStopObserving};
export type {GeoPosition};
