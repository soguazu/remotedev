import styled from "styled-components";
import { Link } from "react-router-dom";
import { BACKGROUND } from "../assets/";

export const colors = {
  primary: "#fff",
  theme: "#005BC4",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  red: "#DC2626",
};

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
  //   url(${BACKGROUND});
  background-size: cover;
  background-attachedment: fixed;
  background: #eee;
`;

export const StyleTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 1.563rem;
`;

export const Avatar = styled.div`
  width: 15rem;
  height: 5rem;
  border-radius: 3rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 1rem;
  border: 3px solid ${colors.primary};
  border-radius: 1.563rem;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  outline: 0;
  transition: ease-in-out 0.3s;

  $:hover {
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 1.563rem;
`;

export const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  padding-left: 35px;
  font-size: 17px;
  letter-spacing: 1px;
  border: 0;
  outline: 0;
  display: block;
  margin: 5px 0 10px 0;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.ivnvalid &&
    `background-color: ${props.red}; color: ${colors.primary};`}

  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 45px 55px;
`;

export const StyledSubmitButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 1rem;
  border: 3px solid ${colors.theme};
  border-radius: 1.563rem;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;
  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  top: 35px;
  cursor: pointer;
  ${(props) => props.right && `right: 15px;`}
  ${(props) => !props.right && `left: 15px;`}
`;

export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ExtraMsg = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  margin-top: 10px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;

export const CopyRightText = styled.p`
  padding: 5px;
  margin: 1.3rem;
  text-align: center;
  color: ${colors.dark2};
`;
