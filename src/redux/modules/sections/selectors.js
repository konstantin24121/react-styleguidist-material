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

const findParentCollection = ({ pathArray, parentSection }) => {
  let index = 0;
  let collection;
  let parent;
  let isComponentCollection;
  let isSectionCollection;
  let findedItem = parentSection;
  for (let i = 0; i < pathArray.length; i += 1) {
    let findedIndex = -1;
    if (findedItem.sections.length) {
      findedIndex = findedItem.sections.findIndex(
        (item) => item.name === pathArray[i],
      );
      if (findedIndex !== -1) {
        index = findedIndex;
        collection = findedItem.sections;
        findedItem = findedItem.sections[index];
        isComponentCollection = false;
        isSectionCollection = true;
      }
    }
    if (findedIndex === -1 && findedItem.components.length) {
      findedIndex = findedItem.components.findIndex(
        (item) => item.name === pathArray[i],
      );
      if (findedIndex !== -1) {
        index = findedIndex;
        collection = findedItem.components;
        findedItem = findedItem.components[index];
        isComponentCollection = true;
        isSectionCollection = false;
      }
    }
    if (i < pathArray.length - 1) {
      parent = findedItem;
    }
  }
  return { index, collection, parent, isComponentCollection, isSectionCollection };
};

const findDeepPage = (section) => {
  if (!section.components || !section.sections) return section;

  if (section.components.length) {
    const componentsLength = section.components.length;
    return findDeepPage(section.components[componentsLength - 1]);
  }
  if (section.sections.length) {
    const sectionsLength = section.sections.length;
    return findDeepPage(section.sections[sectionsLength - 1]);
  }
  return section;
};

const findPrevSection = (pathArray, parentSection) => {
  pathArray.pop();
  if (pathArray.length === 0) return undefined;
  const {
    collection,
    parent,
    index,
    isComponentCollection,
  } = findParentCollection({ pathArray, parentSection });
  if (index > 0) return collection[index - 1];
  if (index === 0) {
    if (isComponentCollection && parent.sections.length) {
      const sectionLength = parent.sections.length;
      return parent.sections[sectionLength - 1];
    }
  }
  return undefined;
};

const findNextSection = (pathArray, parentSection) => {
  pathArray.pop();
  if (pathArray.length === 0) return undefined;
  const {
    collection,
    parent,
    index,
    isSectionCollection,
  } = findParentCollection({ pathArray, parentSection });

  if (index < collection.length - 1) return collection[index + 1];
  if (parent && isSectionCollection && parent.components && parent.components.length) {
    return parent.components[0];
  }
  return undefined;
};

const getPrevPagePath = createSelector(
  [getActiveSection, getSections],
  (activeSection, sections) => {
    if (!activeSection) return undefined;

    const activeSectionName = activeSection.path;
    const parentSection = sections;
    parentSection.components = [];
    const pathArray = activeSectionName.split('/').slice(1);
    pathArray.push('');

    const prevSection = findPrevSection(pathArray, parentSection);
    return prevSection ? prevSection.path : undefined;
  },
);

const getNextPagePath = createSelector(
  [getActiveSection, getSections],
  (activeSection, sections) => {
    if (!activeSection) return undefined;

    const activeSectionName = activeSection.path;
    const parentSection = sections;
    parentSection.components = [];
    const pathArray = activeSectionName.split('/').slice(1);
    pathArray.push('');

    const nextSection = findNextSection(pathArray, parentSection);
    return nextSection ? nextSection.path : undefined;
  },
);

export { getActiveSection, getPrevPagePath, getNextPagePath };
