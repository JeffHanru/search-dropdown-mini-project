import React, { useRef, useEffect } from "react";
import {
  Input,
  InputDropdownWrapper,
  CountryListWrapper,
  CountryItem,
  FlagWrapper,
  SelectedFlagWrapper,
} from "../styles/input-dropdown";
import { useDispatch } from "react-redux";
import { filter, toLower, includes, defaultTo, isEmpty } from "ramda";
import { get } from "partial.lenses";

function CountriesInputDropdown(props) {
  const {
    ui: { displayDropdown },
  } = props;
  const dispatch = useDispatch();
  const filterCountries = getFilteredCountries();
  const selectCountryName = get(["name", "common"], props.selectedCountry);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef);
  return (
    <div ref={wrapperRef}>
      <InputDropdownWrapper selectCountryName={selectCountryName}>
        {props.selectedCountry.flag && (
          <SelectedFlagWrapper>
            {props.selectedCountry.flag}
          </SelectedFlagWrapper>
        )}
        <Input
          onChange={onInputChanged}
          onFocus={onInputFocused}
          value={props.inputText}
        />
      </InputDropdownWrapper>
      {displayDropdown && renderCountryList()}
    </div>
  );

  function renderCountryList() {
    if (filterCountries.length === 0) {
      return (
        <CountryListWrapper>
          <CountryItem>No country matches</CountryItem>
        </CountryListWrapper>
      );
    }
    return (
      <CountryListWrapper>
        {filterCountries.map((country) => {
          const currentCountrySelected =
            selectCountryName === country.name.common;
          return (
            <CountryItem
              key={country.name.common}
              selectedCountry={currentCountrySelected}
              onClick={() => onCountrySelected(country)}
            >
              <FlagWrapper>{country.flag}</FlagWrapper>
              {country.name.common}
            </CountryItem>
          );
        })}
      </CountryListWrapper>
    );
  }

  function onCountrySelected(country) {
    dispatch(props.selectCountry(country));
  }

  function getFilteredCountries() {
    if (!props.inputText || !isEmpty(props.selectedCountry)) {
      return props.countries;
    }

    if (props.selectedCountry)
      return filter((country) =>
        includes(toLower(props.inputText), toLower(country.name.common))
      )(defaultTo([], props.countries));
  }

  function onInputChanged(event) {
    dispatch(props.updateInputText(event.target.value));
  }

  function onInputFocused() {
    dispatch(props.openDropdown());
  }

  function useClickOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && displayDropdown) {
          dispatch(props.closeDropdown());
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, displayDropdown]);
  }
}

export default CountriesInputDropdown;
