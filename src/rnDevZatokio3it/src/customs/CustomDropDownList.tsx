import RNPickerSelect, {Item} from 'react-native-picker-select';
import {Controller, FieldValues, RegisterOptions} from 'react-hook-form';
import CustomText from './CustomText';
import {Colors} from '../configs';
import {StyleProp, View, ViewStyle} from 'react-native';

export interface IItem {
  label: string;
  value: string;
  color?: string;
  inputLabel?: string;
  key?: string | number;
}

export interface List {
  _id: string;
  name: string;
}

export interface Props {
  control: any | undefined;
  name: string;
  items: Array<any>;
  placeholder: {label: string; value: string | null};
  rules?: Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> | undefined;
  defaultValue?: any;
  styleBox?: StyleProp<ViewStyle>;
  style?: {
    inputIOS: StyleProp<ViewStyle>;
    inputAndroid: StyleProp<ViewStyle>;
  };
  disabled?: boolean;
  colorError?: string;
}

const CustomDropDownList: React.FC<Props> = ({
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
}) => {
  let list: Item[] | {label: string; value: string}[] = [];

  if (items && items.length) {
    items.forEach((item, index) => {
      list.push({
        label: item.name,
        value: item.code,
        key: index.toString(),
      });
    });
  }

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
            items={list}
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

export default CustomDropDownList;
