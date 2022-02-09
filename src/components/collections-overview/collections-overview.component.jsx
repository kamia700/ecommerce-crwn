import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collecton-preview/collecton-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
  <div className='collection-overview'>
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections  
});

export default connect(mapStateToProps)(CollectionsOverview);