import React from 'react';
import './directory.style.scss';
import MenuItem from '../meun-items/meun-items.component'
import {connect} from 'react-redux'

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';


const Directory = ({ sections }) => (
  <div className='directory-menue'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);