import React, { useState, useEffect } from 'react';
import { IProduct } from '../../store/modules/cart/types';

import { MdStore } from 'react-icons/md';
import api from '../../services/api';
import CatalogItem from '../../components/CatalogItem';
import { Header, MainContent } from './styles';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  },[]);
  
  return (
    <>
      <Header>
      <h1>
        Catálogo
      </h1>
      <MdStore size={50} />
      </Header>
      <MainContent>

        {catalog.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </MainContent>
    </>
  )
}

export default Catalog;