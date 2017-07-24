import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ComponentsList } from 'rsg-components';
import { filterComponentsByName, getFilterRegExp } from '../../utils/utils';
import TableOfContentsRenderer from './TableOfContentsRenderer';

export default class TableOfContents extends PureComponent {
 static propTypes = {
   components: PropTypes.array.isRequired,
   sections: PropTypes.array.isRequired,
 };

 constructor(props) {
   super(props);

   this.state = {
     searchTerm: '',
   };
 }

 getComponents = (components, searchTerm) => filterComponentsByName(components || [], searchTerm);

 getSections(sections = [], searchTerm) {
   const regExp = getFilterRegExp(searchTerm);
   return sections.reduce(
     (filteredSections, { name, components: subComponents = [], sections: subSections }) => {
       subComponents = this.getComponents(subComponents, searchTerm);
       if (subComponents.length || !searchTerm || regExp.test(name)) {
         filteredSections.push({
           heading: true,
           name,
           content: this.renderLevel(subComponents, subSections, searchTerm),
         });
       }
       return filteredSections;
     }, []);
 }

 renderLevel(components, sections, searchTerm) {
   const items = [
     ...this.getComponents(components, searchTerm),
     ...this.getSections(sections, searchTerm),
   ];
   return (
     <ComponentsList items={items} />
   );
 }

 render() {
   const { searchTerm } = this.state;
   const { components, sections } = this.props;
   return (
     <TableOfContentsRenderer
       searchTerm={searchTerm}
       items={this.renderLevel(components, sections, searchTerm)}
       onSearchTermChange={(term) => this.setState({ term })}
     />
   );
 }
}
