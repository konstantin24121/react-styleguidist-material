import React from 'react';
import PropTypes from 'prop-types';
import MyPropTypes from 'sg/utils/prop-types';

import { H1, H2, H3, H4, H5, H6 } from './TitleStyled';

const Title = ({ size, children, withoutMargin }) => {
  switch (size) {
    case 1: return <H1 withoutMargin={withoutMargin}>{children}</H1>;
    case 2: return <H2 withoutMargin={withoutMargin}>{children}</H2>;
    case 3: return <H3 withoutMargin={withoutMargin}>{children}</H3>;
    case 4: return <H4 withoutMargin={withoutMargin}>{children}</H4>;
    case 5: return <H5 withoutMargin={withoutMargin}>{children}</H5>;
    case 6: return <H6 withoutMargin={withoutMargin}>{children}</H6>;
    default: return null;
  }
};

Title.propTypes = {
  size: MyPropTypes.intRange(1, 6).isRequired,
  withoutMargin: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  withoutMargin: false,
};

export default Title;
