export const cacheImages = async (srcArray, callback) => {
  const promises = await srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });
  let result = await Promise.all(promises);
  console.log(result);
  callback();
};
