import React from "react";

import { MyContextProvider } from "./myContext";
import Counter from "./counter";
import CounterRedux from "./counterRedux";
import BookComponent from "./components/BookComponent";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return(
    // <Provider store={store}>
    // <CounterRedux/>
    //   </Provider>
    <div>
    <BookComponent />
  </div>
  )
}

export default App;