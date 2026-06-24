// handler
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IdReplacer = (objectData: any, targetedId: string) => {
  // state
  const tempData = [];
  // loop
  for (const item of objectData) {
    const new_product = {
      ...item,
      id: item[targetedId],
    };
    tempData.push(new_product);
  }
  // response
  return tempData;
};
