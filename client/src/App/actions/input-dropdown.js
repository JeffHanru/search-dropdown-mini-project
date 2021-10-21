import axios from "axios";

export const FETCH_COUNTRIES_START = "input-dropdown/fetch-countries-start";
export const FETCH_COUNTRIES_SUCCESS = "input-dropdown/fetch-countries-success";
export const FETCH_COUNTRIES_FAILURE = "input-dropdown/fetch-countries-failure";
export const SELECT_COUNTRY = "input-dropdown/select-country";
export const UPDATE_INPUT_TEXT = "input-dropdown/update-input-text";
export const OPEN_DROPDOWN = "input-dropdown/open-dropdown";
export const CLOSE_DROPDOWN = "input-dropdown/close-dropdown";

export function closeDropdown() {
  return {
    type: CLOSE_DROPDOWN,
  };
}

export function openDropdown() {
  return {
    type: OPEN_DROPDOWN,
  };
}

export function updateInputText(data) {
  return {
    type: UPDATE_INPUT_TEXT,
    data,
  };
}

export function fetchCountriesSuccess(data) {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    data,
  };
}

export function fetchCountriesFailure() {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    data: "request failed",
  };
}

export function fetchCountries() {
  return (dispatch) => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flag")
      .then((response) => {
        dispatch(fetchCountriesSuccess(response.data));
      })
      .catch(() => {
        dispatch(fetchCountriesFailure());
      });
  };
}

export function selectCountry(data) {
  return {
    type: SELECT_COUNTRY,
    data,
  };
}
