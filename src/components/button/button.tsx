import { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  value: any;
  className?: string;
  type?: "button" | "submit" | undefined;
  disabled?: boolean;
  fontSize?: string;
  marginTop?: string;
  marginBottom?: string;
  width?: string;
  radius?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  value,
  className,
  type,
  disabled = false,
  fontSize,
  marginTop,
  marginBottom,
  width,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const PrimaryButton = styled(Button)<Props>`
  text-transform: uppercase;
  padding: 20px 40px;
  border-radius: 30px;
  font-size: ${(props) => props.fontSize || "15px"};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  color: rgb(255, 255, 255);
  background: linear-gradient(45deg, rgb(234, 217, 193), rgb(235, 130, 124));
  border: none;

  &:hover {
    cursor: ${(props) => !props.disabled && "pointer"};
    background: ${(props) =>
      !props.disabled &&
      "linear-gradient(260deg, rgb(232, 77, 31), rgb(255, 89, 64))"};
    transform: ${(props) => !props.disabled && "scale(1.1)"};
  }
  @media only screen and (max-width: 768px) {
    padding: 16px 30px;
    width: ${(props) => props.width || "100%"};
    margin-bottom: 1.5rem;
    font-size: ${(props) => props.fontSize || "14px"};
    &:hover {
      transform: ${(props) => !props.disabled && "scale(1)"};
    }
  }
`;

const SecondaryButton = styled(Button)<Props>`
  text-transform: uppercase;
  padding: 20px 40px;
  border-radius: ${(props) => props.radius || "0"};
  font-size: ${(props) => props.fontSize || "15px"};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  border: none;
  width: ${(props) => props.width || "100%"};
  background-color: white;

  &:hover {
    cursor: ${(props) => !props.disabled && "pointer"};
    border-color: ${(props) => !props.disabled && "rgb(232, 77, 31)"};
    transform: ${(props) => !props.disabled && "scale(1.1)"};
    border-radius: 1rem;
    background: linear-gradient(45deg, rgb(255, 254, 253), rgb(255, 248, 237));
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 30px;
    font-size: ${(props) => props.fontSize || "14px"};
    width: ${(props) => props.width || "100%"};
    &:hover {
      transform: ${(props) => !props.disabled && "scale(1)"};
    }
  }
`;

export { PrimaryButton, SecondaryButton };
