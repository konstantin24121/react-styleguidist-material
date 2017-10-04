import styled from 'styled-components';

export default styled.hr`
  width: 80%;
  border: none;
  border-bottom: 1px ${(props) => props.theme.colors.uiGradeout} solid;
`;
