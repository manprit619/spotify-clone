//setup data layer

import React, { createContext, useContext, useReducer } from "react";

// we need this to track the basket

// this is the data layer

export const DataLayerContext = createContext();

// build a provider

export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// Pull information from the data layer
//this is how we use it inside of a component
export const useDataLayerValue = () => useContext(DataLayerContext);