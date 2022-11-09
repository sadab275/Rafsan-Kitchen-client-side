import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Myreviews = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    return (
        <div>
            <h2 className='text-5xl text-center font-bold text-green-700 mb-5'>My Reviews {orders.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Review</th>
                            <th>Service Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <ReviewRow
                                key={order._id}
                                order={order}
                            ></ReviewRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myreviews;