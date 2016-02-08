export default function isAndroid() {
  return window.navigator.userAgent.toLowerCase().indexOf("android") > -1;
}
