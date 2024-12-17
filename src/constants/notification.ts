import { colors } from "./colors";

interface PHONE_INTERFACE {
  number: string;
  link: string;
}

export default interface CURRENCY_INTERFACE {
  name: string;
  symbol: string;
}

interface NOTIFICATION_INTERFACE {
  phone: PHONE_INTERFACE;
  message: string;
  currency: CURRENCY_INTERFACE[];
  backgroundColor: string;
}

export const initialNotification: NOTIFICATION_INTERFACE = {
  phone: {
    number: "01126884803",
    link: "tel:01126884803",
  },
  message: "hello from our helth company website store",
  currency: [
    {
      name: "USD",
      symbol: "$",
    },
    {
      name: "EGP",
      symbol: "L.E.",
    },
  ],
  backgroundColor: colors.mainColor,
};
