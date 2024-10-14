import React, { useContext } from "react";
import { initialState, TInitialState, useStore } from "../store/store";

const StateContext = React.createContext<TInitialState>();
const DispatchContext = React.createContext<React.Dispatch<any> | null>();

export const useGlobalState = () => {
  const state = useContext(StateContext);
  //   console.log("state", state);
  if (!state)
    throw new Error("useGlobalState can only be used inside FormProvider");
  return state;
};

export const useCustomDispatch = () => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch)
    throw new Error("useCustomDispatch can only be used inside FormProvider");
  return dispatch;
};

export function FormProvider({ children }: React.PropsWithChildren) {
  const { state, dispatch } = useStore();
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
