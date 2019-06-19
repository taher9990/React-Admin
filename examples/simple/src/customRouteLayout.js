import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { crudGetList, Title } from 'react-admin';

const CustomRouteLayout = () => {
    const dispatch = useDispatch();
    const total = useSelector(state =>
        state.admin.resources.posts ? state.admin.resources.posts.list.total : 0
    );

    useEffect(() => {
        dispatch(
            crudGetList(
                'posts',
                { page: 0, perPage: 10 },
                { field: 'id', order: 'ASC' }
            )
        );
    }, [dispatch]);

    return (
        <div>
            <Title title="Example Admin" />
            <h1>Posts</h1>
            <p>
                Found <span className="total">{total}</span> posts !
            </p>
        </div>
    );
};

export default CustomRouteLayout;
