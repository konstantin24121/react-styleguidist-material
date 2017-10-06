import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SelectableList } from 'sg/compounds';
import { getFilterRegExp, filterComponentsByName } from 'sg/utils/utils';
import { Noresults } from './FilteredListStyled';

class FilteredList extends Component {
  static propTypes = {
    sections: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
  };

  getComponents = (components, searchTerm) => filterComponentsByName(components || [], searchTerm);

  filter = (sections) => {
    const { searchTerm } = this.props;
    const regExp = getFilterRegExp(searchTerm);
    return sections.reduce(
      (filteredSections, nextSection) => {
        const subComponents = this.getComponents(nextSection.components, searchTerm);
        if (nextSection.sections.length) {
          const filteredSubSections = this.filter(nextSection.sections);
          filteredSections = filteredSections.concat(filteredSubSections);
        }
        if (subComponents.length) {
          filteredSections = filteredSections.concat(subComponents);
        }
        if (regExp.test(nextSection.name)) {
          filteredSections.push({
            ...nextSection,
            components: [],
            sections: [],
          });
        }
        return filteredSections;
      }, []);
  }

  render() {
    const { sections, searchTerm } = this.props;
    if (searchTerm.length < 3) {
      const plural = searchTerm.length === 1 ? 'two' : 'one';
      return (<Noresults>Type {plural} more than </Noresults>);
    }
    const filteredSections = this.filter(sections);
    if (!filteredSections.length) {
      return (<Noresults>No results</Noresults>);
    }
    return (
      <SelectableList sections={filteredSections} />
    );
  }
}

export default FilteredList;
