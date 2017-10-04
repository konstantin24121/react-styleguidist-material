import { processSections, processComponents } from 'sg/utils/utils';

const styleguide = require('styleguide!index.js'); // eslint-disable-line
const components = processComponents(styleguide.components || []);
const sections = processSections(styleguide.sections || []);

if (components.length) {
  sections.push({
    name: 'Components',
    path: 'Components',
    sections: [],
    content: '',
    components,
  });
}


/*
  Sections reduser
 */
const initialState = {
  sections,
};

export default function (store = initialState, { type, payload }) {
  switch (type) {
    default: return store;
  }
}
