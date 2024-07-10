import {FC} from 'react';
import {View, TextInput, StyleSheet, Platform, KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';
import {Controller, RegisterOptions} from 'react-hook-form';
import {Sizes, Colors, FontFamily} from '../configs';
import CustomText from './CustomText';

interface CustomInput {
  control: any;
  name: string;
  title?: string;
  rules?: Object | RegisterOptions;
  placeholder: string;
  colorError?: string;
  numberOfLines?: number;
  multiline?: boolean;
  style?: Object | StyleProp<TextStyle>;
  styleBox?: Object | StyleProp<TextStyle>;
  maxLength?: number | undefined;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  typeStyle?: 'normal' | 'white' | undefined;
  lowercase?: boolean;
  editable?: boolean;
  textAlignVertical?: 'center' | 'auto' | 'top' | 'bottom' | undefined;
  placeholderTextColor?: string;
}

const CustomInput: FC<CustomInput> = ({
  control,
  name,
  rules = {},
  placeholder,
  numberOfLines = undefined,
  multiline,
  maxLength,
  style,
  styleBox,
  colorError = Colors.danger,
  secureTextEntry,
  keyboardType,
  lowercase = false,
  editable = true,
  textAlignVertical,
  placeholderTextColor = Colors.light
}) => {
  const handleOnTextChanged = (text: string, onChange: (text: string) => void) => {
    if (typeof onChange === 'function') {
      if (lowercase) {
        onChange(text.toLowerCase());
      } else {
        onChange(text);
      }
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View>
          <View style={[styleBox,{borderColor: error ? Colors.danger : Colors.light}]}>
            <TextInput
              value={value}
              onChangeText={text => handleOnTextChanged(text, onChange)}
              onBlur={onBlur}
              editable={editable}
              numberOfLines={numberOfLines}
              multiline={multiline}
              placeholder={placeholder}
              maxLength={maxLength}
              keyboardType={keyboardType}
              style={[styles?.input, style]}
              textAlignVertical={textAlignVertical}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={placeholderTextColor}
            />
          </View>
          {error && (
            <CustomText
              style={{
                color: colorError,
                alignSelf: 'stretch',
                paddingLeft: 2,
                marginTop: 4,
                marginBottom: 2,
              }}>
              {error.message || 'Error'}
            </CustomText>
          )}
        </View>
      )}
    />
  );
};

const styles = Platform.select({
  android: StyleSheet.create({
    text: {
      fontSize: Sizes.sm,
      color: Colors.black,
      fontWeight: '600',
      marginBottom: 2,
      marginLeft: 2,
    },
    input: {fontSize: Sizes.md, fontFamily: FontFamily, width: '100%', color: Colors.black},
  }),
  ios: StyleSheet.create({
    text: {
      fontSize: Sizes.sm,
      color: Colors.black,
      fontWeight: '600',
      marginBottom: 2,
      marginLeft: 2,
    },
    input: {fontSize: Sizes.md, fontFamily: FontFamily, width: '100%', color: Colors.black, paddingVertical: 12},
  }),
});

export default CustomInput;
