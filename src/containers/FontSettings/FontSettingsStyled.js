import theme from 'sg/styles/theme';

export const smallIcon = {
  width: '20px',
};

const fontIcon = {
  lineHeight: 1,
  textAlign: 'center',
};

export const sans = { ...fontIcon,
  fontFamily: theme.fontFamilies.sans,
};

export const serif = { ...fontIcon,
  fontFamily: theme.fontFamilies.serif,
};

export const activeIcon = {
  color: theme.colors.uiPrimary,
};
