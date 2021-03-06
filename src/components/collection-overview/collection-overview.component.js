import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import './collection-overview.style.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="shop-page">
        {
            collections.map(({ id, ...props }) => (
                <CollectionPreview key={id} {...props} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);