import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  FETCH_COUNTRIES_SUCCESS,
  UPDATE_INPUT_TEXT,
  SELECT_COUNTRY,
  OPEN_DROPDOWN,
  CLOSE_DROPDOWN,
} from "../App/actions/input-dropdown";
import thunk from "redux-thunk";
import { set } from "partial.lenses";
import { pipe } from "ramda";

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === "development";
const initialState = {
  ui: { displayDropdown: false },
  countries: [],
  inputText: "",
  selectedCountry: {},
};

const reducers = {
  inputDropdown: (state = initialState, action) => {
    const { type } = action;
    switch (type) {
      case FETCH_COUNTRIES_SUCCESS: {
        return pipe(set(["countries"], action.data))(state);
      }
      case UPDATE_INPUT_TEXT: {
        return pipe(
          set(["inputText"], action.data),
          set(["selectedCountry"], {})
        )(state);
      }
      case SELECT_COUNTRY: {
        return pipe(
          set(["selectedCountry"], action.data),
          set(["inputText"], action.data.name.common),
          set(["ui", "displayDropdown"], false),
        )(state);
      }
      case OPEN_DROPDOWN: {
        return pipe(
          set(["ui", "displayDropdown"], true),
        )(state);
      }
      case CLOSE_DROPDOWN: {
        return pipe(
          set(["ui", "displayDropdown"], false),
        )(state);
      }
      default:
        return state;
    }
  },
};

const slices = combineReducers({ ...reducers });

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose;

const store = createStore(slices, composeEnhancers(applyMiddleware(thunk)));

export default store;
