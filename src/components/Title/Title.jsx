import React from 'react';
import PropTypes from 'prop-types';
import { propTypes as MyPropTypes } from 'sg/utils';

import { H1, H2, H3, H4, H5, H6 } from './TitleStyled';

const Title = ({ size, children, withoutMargin, isThin, fitInLine }) => {
  const props = {
    isThin,
    withoutMargin,
    fitInLine,
  };
  switch (size) {
    case 1: return <H1 {...props}>{children}</H1>;
    case 2: return <H2 {...props}>{children}</H2>;
    case 3: return <H3 {...props}>{children}</H3>;
    case 4: return <H4 {...props}>{children}</H4>;
    case 5: return <H5 {...props}>{children}</H5>;
    case 6: return <H6 {...props}>{children}</H6>;
    default: return null;
  }
};

Title.propTypes = {
  /**
   * Размер заголовка
   */
  size: MyPropTypes.intRange(1, 6).isRequired,
  /**
   * Без вертикальных отступов
   */
  withoutMargin: PropTypes.bool,
  /**
   * Уменьшеный вес шрифта
   */
  isThin: PropTypes.bool,
  /**
   * Вписать в родительскую строку
   */
  fitInLine: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  withoutMargin: false,
  isThin: false,
  fitInLine: false,
};

export default Title;
