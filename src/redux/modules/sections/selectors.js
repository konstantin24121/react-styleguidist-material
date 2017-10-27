import { createSelector } from 'reselect';

const getSections = (state) => state.sections;
const getActiveSectionName = (state, props) => props.location.pathname;

const getActiveSection = createSelector(
  [getActiveSectionName, getSections],
  (activeSectionName, sections) => {
    /*
      Find main segment and use it for main page
     */
    if (activeSectionName === '/') {
      const findMainSectionDeep = (segment) => {
        let findedActiveSection = null;
        if (segment.sections && segment.sections.length) {
          findedActiveSection = segment.sections.find((item) => item.isMainSection);
          if (!findedActiveSection) {
            for (let i = 0; i < segment.sections.length; i += 1) {
              const childSection = segment.sections[i];
              findedActiveSection = findMainSectionDeep(childSection);
              if (findedActiveSection) return findedActiveSection;
            }
          }
        }
        return findedActiveSection;
      };
      let mainSection = findMainSectionDeep(sections);
      if (!mainSection) {
        mainSection = sections.sections[0];
      }
      return mainSection;
    }

    let activeSection = sections;
    const pathArray = activeSectionName.split('/').slice(1);
    activeSection.components = [];
    for (let i = 0; i < pathArray.length; i += 1) {
      if (!activeSection) return null;
      let findedActiveSection;
      if (activeSection.sections.length) {
        findedActiveSection = activeSection.sections.find((item) => item.name === pathArray[i]);
      }
      if (!findedActiveSection && activeSection.components.length) {
        findedActiveSection = activeSection.components.find((item) => item.name === pathArray[i]);
      }
      activeSection = findedActiveSection;
    }
    return activeSection;
  },
);

export { getActiveSection };
