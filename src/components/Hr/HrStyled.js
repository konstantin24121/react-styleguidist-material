import styled from 'styled-components';

export default styled.hr`
  width: 80%;
  border-bottom: 1px ${(props) => props.theme.colors.uiGradeout} solid;
  border-top: none;
`;
