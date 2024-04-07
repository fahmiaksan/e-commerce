import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { STATUS } from '../../utils/status';
import { formatPrice } from '../../utils/helpers';
import { setIsModalVisible, setModalData } from '../../store/ModalSlice';
import SingleProduct from '../SingleProduct/SingleProduct';
import PropTypes from 'prop-types';
function SingleCategory({ products, status }) {

    const dispatch = useDispatch();
    const { isModalVisible } = useSelector(state => state.modal);
    const categories =
        useMemo(() => products.filter((data) => { return data.category.name !== 'Clothes' }),
            [products]);
    const categoryName = categories.map((data) => data.category.name);

    const viewHandlerModal = (data) => {

        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    }
    if (STATUS.LOADING === status) return (<Loader />);
    if (STATUS.ERROR === status) return (<Error />);
    return (
        <section className='pt-16'>
            {
                isModalVisible && <SingleProduct />
            }
            <div>
                <div className='lg:px-28 sm:px-16 hp:px-12 pt-10'>
                    <div>
                        <h3 className='font-bold md:text-2xl hp:text-xl text-blue-950 tracking-wider'>{categoryName[0]}</h3>
                    </div>
                    <div className='grid w-full justify-center gap-4 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 pt-5 hp:grid-cols-2 -z-50'>
                        {categories.map((data) => {
                            return (
                                <div className='shadow-xl px-4 pt-4 pb-10 space-y-3' key={data.id} onClick={() => viewHandlerModal(data)}>
                                    <div className='flex relative'>
                                        <img src={data.images[0].replace(/"]/g, '')} alt={data.category.name} />
                                        <div className='-translate-x-full h-7 px-2 font-semibold mt-2 flex items-center rounded-xl bg-yellow-500 text-sm tracking-wider text-white shadow-slate-700 shadow-2xl'>{data.category.name}</div>
                                    </div>
                                    <div className='text-slate-500'>{(data.title).substring(0, 18)}...</div>
                                    <div className='text-blue-950 font-semibold text-lg'>{formatPrice(data.price)}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
SingleCategory.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.string,
};

export default SingleCategory