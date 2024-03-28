'use client'
import useFetchCollection from '@/hooks/useFetchCollection'
import React, { useEffect } from 'react'
import styles from './Product.module.scss';
import { useDispatch } from 'react-redux';
import { GET_PRICE_RANGE, STORE_PRODUCTS } from '@/redux/slice/productSlice';
import Loader from '../loader/Loader';
import ProductList from './productList/ProductList';
import ProductFilter from './productFilter/ProductFilter';

const Product = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useFetchCollection("products");

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data
      })
    )

    dispatch(
      GET_PRICE_RANGE({
        products: data
      })
    )
  }, [data, dispatch])

  return (
    <section className={styles.product}>
      <aside
        className={styles.filter}
      >
        {isLoading ? null : <ProductFilter />}
      </aside>
      <div className={styles.content}>
        {isLoading ?
          <Loader basic />
          :
          <ProductList />
        }
      </div>
    </section>

  )
}

export default Product