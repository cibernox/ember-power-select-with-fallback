import isIos from './is-ios';
import isAndroid from './is-android';
import isWindowsPhone from './is-windows-phone';

export default function isMobile() {
  return isIos() || isAndroid() || isWindowsPhone();
}
