import React from 'react';
import PropTypes from 'prop-types';
import { Title, Hr } from 'sg/components';
import { MarkdownContent } from 'sg/compounds';
import { Grid } from './DocPageStyled';

const SectionRenderer = ({ dockSegment }) => {
  const { content, name } = dockSegment;

  return (
    <Grid>
      <div>
        <Title size={2} isThin>{name}</Title>
      </div>
      <div />
      <Hr />
      <div>
        <MarkdownContent
          content={content}
        />
      </div>
    </Grid>
  );
};

SectionRenderer.propTypes = {
  dockSegment: PropTypes.object.isRequired,
};

export default SectionRenderer;
