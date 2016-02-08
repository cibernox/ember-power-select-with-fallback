export default function isIos() {
  return /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;
}
