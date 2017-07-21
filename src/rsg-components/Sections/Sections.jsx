import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'rsg-components';
import SectionsRenderer from './SectionsRenderer';

export default function Sections({
  sections,
  sidebar,
}) {
  const sectionsJsx = sections.map((section) => (
    <Section
      key={section.name}
      section={section}
      sidebar={sidebar}
    />
  ));
  return (
    <SectionsRenderer sections={sectionsJsx} />
  );
}

Sections.propTypes = {
  sections: PropTypes.array.isRequired,
  sidebar: PropTypes.bool,
};

Sections.defaultProps = {
  sidebar: true,
};
