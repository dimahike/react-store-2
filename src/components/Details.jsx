import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setDetails } from '../redux/actions/details';

function Details() {
  const dispatch = useDispatch();
  const id = useParams().id;
  const { items, isLoaded } = useSelector(({ products }) => products);

  React.useEffect(() => {
    dispatch(setDetails(id));
  }, [id]);


  return <div>hello from Details</div>;
}

export default Details;
