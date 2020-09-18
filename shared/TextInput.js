import Styled from "styled-components";

const TextInput = Styled.input`
background-color: #E9EFF6;

padding: 12px;
line-height: 1.5;
border-radius: 10px;
border-width: 0px;
margin: 10px;
`;

export const SmolInput = Styled(TextInput)`
  width: 100px;
`;

export const MdInput = Styled(TextInput)`
  width: 180px;
`;

export const LargeInput = Styled(TextInput)`
  width: 300px;
`;

export default TextInput;
