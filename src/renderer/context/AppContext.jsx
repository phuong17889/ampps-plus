import React from 'react';

const AppContext = React.createContext('dark');

export default AppContext;
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
