import React, { useEffect } from "react";
import InputDropdown from "../components/input-dropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCountries,
  updateInputText,
  selectCountry,
  openDropdown,
  closeDropdown,
} from "../actions/input-dropdown";

function InputDropdownContainer() {
  const propsFromState = useSelector((state) => ({
    countries: state.inputDropdown.countries,
    inputText: state.inputDropdown.inputText,
    selectedCountry: state.inputDropdown.selectedCountry,
    ui: state.inputDropdown.ui,
  }));

  const propsFromActions = {
    updateInputText,
    selectCountry,
    openDropdown,
    closeDropdown,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return <InputDropdown {...propsFromState} {...propsFromActions} />;
}

export default InputDropdownContainer;
