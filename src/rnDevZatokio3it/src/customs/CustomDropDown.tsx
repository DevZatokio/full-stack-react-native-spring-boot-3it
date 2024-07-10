import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';
import {Controller, FieldValues, RegisterOptions} from 'react-hook-form';
import CustomText from './CustomText';
import {Colors} from '../configs';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';

export interface IItem {
  key?: string | number;
  label: string;
  value: string;
  color?: string;
  inputLabel?: string;
}

export interface List {
  _id: string;
  name: string;
}

export interface Props {
  control: any;
  name: string;
  items: Array<IItem | any>;
  placeholder: {label: string; value: string | null};
  styleBox?: StyleProp<ViewStyle>;
  defaultValue?: any;
  rules?: Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> | undefined;
  style?: {
    inputIOS: StyleProp<TextStyle | any>;
    inputAndroid: StyleProp<TextStyle> | any;
  };
  disabled?: boolean;
  colorError?: string;
}

const CustomDropDown = ({
  control,
  items,
  disabled,
  style = {inputIOS: {}, inputAndroid: {}},
  name,
  rules,
  defaultValue,
  styleBox,
  placeholder,
  colorError = Colors.danger,
}: Props) => {
  return items && items.length > 0 ? (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <View style={styleBox}>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            disabled={disabled}
            items={items}
            value={value}
            placeholder={placeholder}
            onValueChange={onChange}
            style={{
              inputIOS: style?.inputIOS,
              inputAndroid: style?.inputAndroid,
            }}
          />
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
  ) : (
    <></>
  );
};

export default CustomDropDown;
