import {Colors, Sizes} from '../configs';

export const DropdownStyles = {
  android: {
    textAlign: 'center',
    fontSize: Sizes.p,
    marginTop: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 12,
    paddingRight: 30, // to ensure the text is never behind the icon
    color: Colors.black,
    backgroundColor: Colors.white,
    borderColor: Colors.light_fa,
  },
  ios: {
    textAlign: 'center',
    fontSize: Sizes.p,
    marginTop: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 12,
    paddingRight: 30, // to ensure the text is never behind the icon
    color: Colors.black,
    backgroundColor: Colors.white,
    borderColor: Colors.light_fa,
  },
};
