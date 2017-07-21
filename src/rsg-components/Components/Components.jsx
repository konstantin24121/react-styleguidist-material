import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent, Sections } from 'rsg-components';
import ComponentsRenderer from './ComponentsRenderer';

export default function Components({
  components,
  sections,
  sidebar,
}) {
  const componentsJsx = components.map((component) => (
    <ReactComponent
      key={component.filepath}
      component={component}
      sidebar={sidebar}
    />
  ));

  const sectionsJsx = (
    <Sections
      sections={sections}
      sidebar={sidebar}
    />
  );

  return (
    <ComponentsRenderer
      components={componentsJsx}
      sections={sectionsJsx}
    />
  );
}

Components.propTypes = {
  components: PropTypes.array.isRequired,
  sections: PropTypes.array.isRequired,
  sidebar: PropTypes.bool,
};

Components.defaultProps = {
  sidebar: false,
};
