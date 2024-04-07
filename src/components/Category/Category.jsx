import { STATUS } from '../../utils/status';
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Category({ categories, status }) {
    if (STATUS.LOADING === status) return (<Loader />);
    if (STATUS.ERROR === status) return (<Error />);
    return (
        <section>
            <div>
                <div className='lg:px-28 sm:px-20 hp:px-14 pt-10'>
                    <div>
                        <h3 className='font-bold md:text-2xl hp:text-xl text-blue-950 tracking-wider'>CATEGORY</h3>
                    </div>
                    <div className='grid w-full justify-center gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 pt-5 hp:grid-cols-2'>
                        {
                            categories.map(category => {
                                return (
                                    <Link to={`category/${category.id}`} key={category.id}>
                                        <div className=''>
                                            <img src={category.image} className='rounded-xl' />
                                        </div>
                                        <div className='flex justify-center pt-2 pb-3 text-black font-semibold tracking-wide md:text-xl hp:text-lg'>
                                            {category.name}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

Category.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.string,
};
export default Category