function findNaughtyStep(original, modified) {

  let minLength = Math.min(original.length, modified.length);
  console.log(minLength)

  for (let i = 0; i < minLength; i++) {
    if (original[i] !== modified[i]) {

      console.log(original[i])
      console.log(modified[i])
      return original.length > modified.length ? original[i] : modified[i];
    }
  }


  if (original.length !== modified.length) {
    console.log(" adsf  --" + modified[minLength])
    console.log(modified + " " + minLength)
    return original.length > modified.length ? original[minLength] : modified[minLength];
  }


  return "";
}