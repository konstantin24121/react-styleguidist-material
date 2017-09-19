import styled from 'styled-components';
import { modularScale } from 'sg/styles/theme';

const withoutMargin = (props, scale) => props.withoutMargin ? 0 : modularScale(scale);

const Title = styled.div`
  font-weight: 600;
  margin: 0;
`;

export const H1 = Title.withComponent('h1').extend`
  font-size: ${modularScale(2.5)}px;
  padding: ${(props) => withoutMargin(props, 0.75)}px 0;
  font-weight: 600;
`;

export const H2 = Title.withComponent('h2').extend`
  font-size: ${modularScale(2)}px;
  padding: ${(props) => withoutMargin(props, 0.5)}px 0;
  font-weight: 600;
`;

export const H3 = Title.withComponent('h3').extend`
  font-size: ${modularScale(1.5)}px;
  padding: ${(props) => withoutMargin(props, 0.25)}px 0;
  font-weight: 600;
`;

export const H4 = Title.withComponent('h4').extend`
  font-size: ${modularScale(1)}px;
  padding: ${(props) => withoutMargin(props, 0.25)}px 0;
  font-weight: 600;
`;

export const H5 = Title.withComponent('h5').extend`
  font-size: ${modularScale(0)}px;
  padding: ${(props) => withoutMargin(props, 0.25)}px 0;
  font-weight: 600;
`;

export const H6 = Title.withComponent('h6').extend`
  font-size: ${modularScale(0)}px;
  padding: ${(props) => withoutMargin(props, 0.25)}px 0;
  font-weight: 600;
`;
