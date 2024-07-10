# React Native

```bash
  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/devzatokio/Desktop/Proyeto3it/rnDevZatokio3it" && npx react-native run-android
  
  Run instructions for iOS:
    • cd "/Users/devzatokio/Desktop/Proyeto3it/rnDevZatokio3it"
    • npx react-native run-ios
    - or -
    • Open rnDevZatokio3it/ios/rnDevZatokio3it.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button
    
  Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
```
## Install Componnet

```bash
yarn add --dev --exact prettier
yarn add react-hook-form
yarn add react-native-navigation
yarn add react-native-navigation-hooks
yarn add react-native-navigation-register-screens
yarn add react-native-navigation-drawer-extension
yarn add react-native-navigation-search-bar
yarn add react-native-navigation-bottom-sheet
yarn add react-native-gesture-handler react-native-reanimated
yarn add react-native-uuid moment
yarn add react-native-permissions
yarn add react-native-geolocation-service
yarn add @react-native-community/netinfo
yarn add react-native-uuid
yarn add react-native-picker-select @react-native-picker/picker
yarn add react-native-charts-wrapper
```

## Add Fonts

```bash
npx react-native-asset
```

## Install React Native Navigation Next error

Modificar url node_modules/react-native-navigation/autolink/postlink/path.js
```js
var mainApplicationJava = glob.sync('**/MainApplication.{java,kt}', ignoreFolders)[0];
```
```bash
npx rnn-link
```
## Android
### Modify 'MainActivity.kt'
```kotlin
...

import com.reactnativenavigation.NavigationActivity

class MainActivity : NavigationActivity() {

}
```
### Modify 'MainApplication.kt'
```kotlin
...

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load;
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost;
import com.facebook.soloader.SoLoader;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;

class MainApplication : NavigationApplication() {

  override val reactNativeHost: ReactNativeHost = object : NavigationReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
            // Packages that cannot be autolinked yet can be added manually here, for example:
            // add(MyReactNativePackage())
        }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
  }

  override val reactHost: ReactHost
    get() = getDefaultReactHost(this.applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
  }
}
```

### Update 'AndroidManifest.xml'
```xml
android:launchMode="singleTask"
``` 

### Error Component 74 react native navigation
```bash
import com.facebook.react.common.ReactConstants;

-|| ((oldStyle & Typeface.BOLD) != 0 && weight == ReactTextShadowNode.UNSET)) {
+|| ((oldStyle & Typeface.BOLD) != 0 && weight == ReactConstants.UNSET)) {

-|| ((oldStyle & Typeface.ITALIC) != 0 && style == ReactTextShadowNode.UNSET)) {
+|| ((oldStyle & Typeface.ITALIC) != 0 && style == ReactConstants.UNSET)) {
```

## IOS

### Modify 'AppDelegate.m'
```m
#import "AppDelegate.h"
#import <ReactNativeNavigation/ReactNativeNavigation.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ReactNativeNavigation bootstrapWithDelegate:self launchOptions:launchOptions];
    return YES;
}
```

### Ensure that 'AppDelegate.h' includes:

```h
#import <ReactNativeNavigation/ReactNativeNavigation.h>
```

```bash
pod install --project-directory=ios
npx pod-install
```


# Spring Boot

## Install 

```bash
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-test</artifactId>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
<dependency>
  <groupId>com.h2database</groupId>
  <artifactId>h2</artifactId>
  <scope>runtime</scope>
</dependency>
```
## Run 

```bash
mvn spring-boot:run
```

## Configuration

```bash
spring.datasource.url=jdbc:h2:mem:devzatokio
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=123456789
spring.jpa.hibernate.ddl-auto=update
spring.h2.console.enabled=true
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

## Accede a la consola H2 (si usas H2 para pruebas)

```bash
URL: http://localhost:8080/h2-console
JDBC URL: jdbc:h2:mem:devzatokio
User Name: sa
Password: 123456789
```