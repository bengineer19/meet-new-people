import Styled from "styled-components";

export default Styled.button`
  display: inline-block;
  background-color: #4460F1;
  cursor: pointer;

  line-height: 1.5;

  margin-top: 20px;
  padding: 10px;
  min-width: 250px;
  border-radius: 10px;
  color: white;
  font-size: 1.25em;
  font-weight: 500;
  text-align: center;

  border-width: 0;
  
  box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);

  transition: 0.3s;
  :hover{
    box-shadow: 0 6px 20px rgba(0,118,255,0.3);
    background-color: #4F6FFF;
  }
`;
