import { PaymentFrequency } from "../global/constants/common";

export function getSubtitle(price: number, frequency: string) {
  const suffix = frequency === PaymentFrequency.MONTHLY ? "mo" : "yr";
  return `$${price}/${suffix}`;
}

export function getPrice(price: number, frequency: string) {
  const computuedPrice =
    frequency === PaymentFrequency.MONTHLY ? price : price * 10;
  return computuedPrice;
}

export function isSomeFieldEmpty(data: Record<string, any>) {
  return Object.values(data).some((v) => {
    return v === "" || v === null || v === undefined;
  });
}

export function getEmptyFieldNames(data: Record<string, any>) {
  console.log("data", data);
  return Object.keys(data)
    .map((key) => {
      let v = data[key].value;
      if (v === "" || v === null || v === undefined) return key;
    })
    .filter((key) => key);
}
