import React, { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category';
import { fetchProductsByCategory, fetchCategories } from '../../store/CategorySlice';
import { useSelector, useDispatch } from 'react-redux';
import SingleCategory from '../../components/SingleCategory/SingleCategory';
import { fetchProducts } from '../../store/ProductSlice';
import ProductList from '../../components/ProductList/ProductList';
export const HomePage = () => {
    const dispatch = useDispatch();
    const { data: categories, status: categoryStatus } = useSelector((state) => state.category);
    const { catProductAll: productsByCategory, catProductAllStatus } = useSelector((state) => state.category);
    const { data: products, status: productStatus } = useSelector(state => state.product);
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories());
        dispatch(fetchProductsByCategory(1, 'all'));
        dispatch(fetchProductsByCategory(2, 'all'));
    }, []);
    // console.log(productsByCategory);
    return (
        <div className='min-h-[60vh]'>
            <Slider />
            <Category categories={categories} status={categoryStatus} />
            <ProductList products={products} status={productStatus} />
            {/* category one product */}
            <section id='category 1'>
                {
                    productsByCategory[0] && <SingleCategory products={productsByCategory[0]} status={catProductAllStatus} />
                }
            </section>

            {/* category two product */}
            <section id='category 2'>
                {
                    productsByCategory[1] && <SingleCategory products={productsByCategory[1]} status={catProductAllStatus} />
                }
            </section>
        </div>
    )
}