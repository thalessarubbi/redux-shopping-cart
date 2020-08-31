import React, { useCallback } from 'react';
import { IProduct } from '../../store/modules/cart/types';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { ItemCard } from './styles';

import coolJacketImg from '../../assets/cool_jacket.svg'

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failureStockCheck.includes(product.id);
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
    console.log(product.image);
  },[dispatch, product]);
  
  return (
    <ItemCard>
      <img alt="Product" src={product.image} />
      <strong>{product.title}</strong>
      <span>R$ {product.price}</span>
      
      <button 
        onClick={handleAddProductToCart}
        type="submit">
          Comprar
        </button>

      {hasFailedStockCheck && <span style={{color:'red'}}>Falta de estoque</span>}
    </ItemCard>
    )
  }
  
  export default CatalogItem;