import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { withRouter } from 'react-router';

const SelectableListMaterial = makeSelectable(List);

class SelectableList extends Component {
 static propTypes = {
   sections: PropTypes.array.isRequired,
   /*
    Connected
    */
   history: PropTypes.object.isRequired,
 };


 constructor(props) {
   super(props);
   this.state = {
     activeItem: null,
   };
 }

 getSections(sections = []) {
   return sections.reduce(
     (filteredSections, { name, components: subComponents = [], sections: subSections }) => {
       if (subComponents.length) {
         filteredSections.push({
           heading: true,
           name,
           content: this.renderItems([...subComponents, ...subSections]),
         });
       } else {
         filteredSections.push({
           heading: true,
           name,
         });
       }
       return filteredSections;
     }, []);
 }

 handleOnChange = (event, index) => {
   this.setState({
     activeItem: index,
   }, () => {
     this.props.history.push(index);
   });
 };


 renderItems(sections) {
   const items = this.getSections(sections);
   return items.map((item) => (
     <ListItem
       key={item.name}
       value={item.name}
       primaryText={item.name}
       initiallyOpen
       nestedItems={item.content}
     />
   ));
 }

 render() {
   const { sections } = this.props;
   return (
     <SelectableListMaterial
       value={this.state.activeItem}
       onChange={this.handleOnChange}
     >
       {this.renderItems(sections)}
     </SelectableListMaterial>
   );
 }
}

export default withRouter(SelectableList);
