import styled from "styled-components";
import arrowDown from "../../assets/arrow-down.png";

const Input = styled.input.attrs({
  placeholder: "Select",
  placeholderTextColor: "#485269",
})`
  border: 0;
  border-radius: 4px;
  height: 34px;
  outline: none;
  padding-left: 12px;
  width: 100%
`;

const InputDropdownWrapper = styled.div`
  border: 2px solid #d8d8d8;
  border-radius: 4px;
  display: ${props => props.selectCountryName ? "flex" : "block"};
  padding-right: 20px;
  position: relative;
  width: 176px;
  &:focus-within {
    border: 2px solid #0000ff;
  }
  &:after {
    content: "";
    display: inline-block;
    cursor: pointer;
    width: 10px;
    height: 10px;
    right: 6px;
    top: 16px;
    background-repeat: no-repeat;
    background-image: url(${arrowDown});
    position: absolute;
  }
`;

const CountryListWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0px 0px 4px 2px #cfd3dc;
  box-sizing: content-box;
  color: #485269;
  font-family: "Times New Roman";
  max-height: 196px;
  margin-top: 2px;
  overflow: auto;
  padding: 8px 0;
  width: 200px;
`;

const CountryItem = styled.div`
  align-items: center;
  background-color: ${props => props.selectedCountry ? "#e6f7ff" : "none"};
  box-sizing: border-box;
  color: ${props => props.selectedCountry ? "#4747d1" : "#485269"};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
  padding: 0 12px 0 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  word-break: break-all;

  &:hover {
    color: #4747d1;
    background-color: #f8f9fa;
  }
`;

const FlagWrapper = styled.span`
  font-size: 16px;
  margin-right: 12px;
`;

const SelectedFlagWrapper = styled.span`
  font-size: 16px;
  line-height: 36px;
  margin-left: 8px;
`;

export {
  Input,
  InputDropdownWrapper,
  CountryListWrapper,
  CountryItem,
  FlagWrapper,
  SelectedFlagWrapper,
};
