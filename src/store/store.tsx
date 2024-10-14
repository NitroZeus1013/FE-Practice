import { useReducer } from "react";
import { PaymentFrequency } from "../global/constants/common";

export const initialState = {
  personalInfo: {
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    phone: { value: "", error: "" },
  },
  plan: {
    id: -1,
    name: "",
    price: 0,
    frequency: PaymentFrequency.MONTHLY,
  },
  addOn: {},
  error: {
    isError: false,
    step: 0,
  },
};

export type TInitialState = typeof initialState;

export const ACTIONS = {
  UPDATE_PERSONAL_INFO: "update_personal_info",
  ADD_PLAN: "add_plan",
  ADD_ON: "add_on",
  SET_ERROR: "personal_info_error",
};
const reducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    case ACTIONS.ADD_PLAN:
      return {
        ...state,
        plan: { ...state.plan, ...action.payload },
      };
    case ACTIONS.ADD_ON:
      return {
        ...state,
        addOn: { ...state.addOn, ...action.payload },
      };

    default:
      return state;
  }
};
export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
