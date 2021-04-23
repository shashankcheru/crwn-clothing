import React from 'react';

import SHOP_DATA from './shop.data.js';

import collectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor () {
        super();

        this.state = {
            collections: SHOP_DATA
        };

    }

    render() {
        const {collections} = this.state; 
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...othercollectionProps}) => (
                        <CollectionPreview key={id} {...othercollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;