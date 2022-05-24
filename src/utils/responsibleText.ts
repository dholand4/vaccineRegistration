import { Dimensions } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const vh = Dimensions.get('window').height / 100;
export const windowWidth = Dimensions.get('window').width / 100;
const vmin = Math.min(vh, windowWidth);
const vmax = Math.max(vh, windowWidth);

export function scaleFontSize(fontSize: any) {
  const scaledFontSize = moderateScale(fontSize, 1 * (vmin / vmax));
  return scaledFontSize;
}

export function sfs(fontSize: any) {
  if (typeof fontSize === 'string') {
    const [splittedFontSize] = fontSize.split('px');
    if (splittedFontSize) {
      return scaleFontSize(Number(splittedFontSize));
    }
    throw new Error("Input format is invalid! try '8px' or 8");
  }
  return scaleFontSize(fontSize);
}
