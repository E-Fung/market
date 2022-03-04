import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProducts } from './redux/utils/thunkCreators';
import { connect } from 'react-redux';

const ProductCategory = (location) => {
  switch (location) {
    case '/men':
      return "men's clothing";
    case '/women':
      return "women's clothing";
    case '/jewelery':
      return 'jewelery';
    case '/electronics':
      return 'electronics';
    default:
      return '';
  }
};

const Home = (props) => {
  let location = useLocation().pathname;
  const { getProducts, allProducts } = props;

  useEffect(() => {
    getProducts({ category: ProductCategory(location) });
  }, [location]);

  return (
    <div className='justify-center flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
      {allProducts.map((product) => (
        <div className='my-1/2 p-1 w-1/2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:w-1/5'>
          <img src={product.photoUrl} alt='' />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (params) => {
      dispatch(getProducts(params));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

//what should redux store? the products? We want the client to send an API request for each category.
//If ton of products, dont want client to sort each time, else,

//do it database way, sort via SQL
//change redux state each time user changes preference

//add reviews
