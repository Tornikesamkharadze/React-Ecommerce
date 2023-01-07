export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unieque = data.map((item) => item[type]);
  if (type === "colors") {
    unieque = unieque.flat();
  }
  return ["all", ...new Set(unieque)];
};
