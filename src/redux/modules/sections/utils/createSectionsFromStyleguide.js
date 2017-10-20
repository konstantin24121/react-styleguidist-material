import { processSections, processComponents } from 'sg/utils/utils';

export default function (styleguide) {
  const components = processComponents(styleguide.components || [], true);
  const sections = processSections(styleguide.sections || []);

  if (components.length) {
    sections.push({
      name: 'Components',
      path: '/Components',
      sections: [],
      content: '',
      components,
    });
  }

  return {
    sections,
  };
}
