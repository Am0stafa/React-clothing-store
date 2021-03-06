import React from 'react'
import './preview-collection.style.scss';
import CollectionItem from '../../components/collection-item/collectionItem.component'


export const PreviewCollection = ({title, items}) => {
    return (
        <div className="container">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {items.filter((item,idx)=>(idx < 4 )).map(item=>(
            <CollectionItem key={item.id} item={item} />
            ))} 
            </div>
        </div>
    )
}
 
export default PreviewCollection
