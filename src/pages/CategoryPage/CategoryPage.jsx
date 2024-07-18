import { useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../../store/CategorySlice';
import { Link, useParams } from 'react-router-dom';
export function CategoryPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { catProductSingle: products, catProductSingleStatus: status } = useSelector(state => state.category);
    useEffect(() => {
        dispatch(fetchProductsByCategory(id, "single"));
    }, [dispatch, id]);
    return (
        <div>
            <div>
                <div className='lg:px-28 sm:px-16 hp:px-12 py-3'>
                    <ul className='flex space-x-2 '>
                        <li>
                            <Link to="/">
                                <i className='fas fa-home mr-2 text-slate-600'>
                                    <span>
                                        <i className='fas fa-chevron-right ml-2 text-slate-600'></i>
                                    </span>
                                </i>
                            </Link>
                        </li>
                        <li>
                            Category
                            <span>
                                <i className='fas fa-chevron-right mr-2 text-slate-600'>

                                </i>
                            </span>
                        </li>
                        <li>
                            {products[0] && products[0].category.name}
                        </li>
                    </ul>
                </div>
            </div>
            <ProductList products={products} status={status} />
        </div>
    )
}

export default CategoryPage;