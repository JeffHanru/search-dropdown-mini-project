import { hot } from "react-hot-loader/root";
import React from "react";
import GlobalStyle from "../theme";
import { Application, Wrapper } from "./styles";
import InputDropdownContainer from "./containers/input-dropdown-container";
import { Provider } from "react-redux";
import store from "../redux/index";

const App = () => (
  <Wrapper>
    <Provider store={store}>
      <Application>
        <InputDropdownContainer />
      </Application>
      <GlobalStyle />
    </Provider>
  </Wrapper>
);

export default hot(App);
