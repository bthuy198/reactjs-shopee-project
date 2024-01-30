const options = {
  style: "decimal",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
};

export const formattedNumber = (number) =>
  number.toLocaleString("vi-VN", options);
