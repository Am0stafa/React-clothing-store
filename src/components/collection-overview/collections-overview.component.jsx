import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import  PreviewCollection  from '../../components/preview collection/preview-collection.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import './collections-overview.style.scss'


const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            { collections.map(({id, ...others})=>(
               <PreviewCollection key={id} {...others} />
          ))}
     </div>
    )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
