import React, { useCallback } from 'react';
import { IProduct } from '../../store/modules/cart/types';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { ItemCard, ItemImage } from './styles';

import soldOutIcon from '../../assets/icons/soldout_icon.svg';

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
      <ItemImage>
        <img alt="Product" src={product.image} />
        {hasFailedStockCheck && <img src={soldOutIcon} alt="Sold out"/>}
      </ItemImage>
      <strong>{product.title}{hasFailedStockCheck && "(esgotado)"}</strong>
      <span>R$ {product.price}</span>

      {!hasFailedStockCheck &&
        <button 
          onClick={handleAddProductToCart}
          type="submit">
            Comprar
        </button>
        }
    </ItemCard>
    )
  }
  
  export default CatalogItem;