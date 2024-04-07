import { STATUS } from '../../utils/status';
import { setModalData, setIsModalVisible } from '../../store/ModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { formatPrice } from '../../utils/helpers';
import SingleProduct from '../SingleProduct/SingleProduct';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
function ProductList({ products, status }) {
    const dispatch = useDispatch();
    const { isModalVisible } = useSelector(state => state.modal);
    const filterCategoryClothes = useMemo(() => {
        return products.filter((data) => data.category.name !== 'Clothes');
    }, [products]);
    console.log(status);

    const viewModalHandler = (data) => {
        dispatch(setModalData(data))
        dispatch(setIsModalVisible(true));
    }

    if (status === STATUS.LOADING) return <Loader />;
    if (status === STATUS.ERROR) return <Error />;

    return (
        <section>
            {isModalVisible && <SingleProduct />}
            <div>
                <div>
                    <div className='lg:px-28 sm:px-16 hp:px-12 pt-10'>
                        <div>
                            <h3 className='font-bold md:text-2xl hp:text-xl text-blue-950 tracking-wider'>Our Product</h3>
                        </div>
                        <div className='grid w-full justify-center gap-4 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 pt-5 hp:grid-cols-2'>
                            {!filterCategoryClothes.length && <p className='text-center w-full'>Product not available</p>}
                            {filterCategoryClothes.map((data) => {
                                return (
                                    <div className='shadow-xl px-4 pt-4 pb-10 space-y-3' key={data.id} onClick={() => viewModalHandler(data)}>
                                        <div className='flex relative'>
                                            <img src={data.images[1].replace(/"/g, '').replace(/]/g, '')} alt={data.category.name} />
                                            <div className='-translate-x-full h-7 px-2 font-semibold mt-2 flex items-center rounded-xl bg-yellow-500 w-32 text-sm tracking-wider text-white shadow-slate-700 shadow-2xl'>
                                                {data.category.name}</div>
                                        </div>
                                        <div className='text-slate-500'>{(data.title).substring(0, 18)}...</div>
                                        <div className='text-blue-950 font-semibold text-lg'>{formatPrice(data.price)}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.string,
};

export default ProductList;