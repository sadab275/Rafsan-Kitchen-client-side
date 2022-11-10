import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';



const Myreviews = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useTitle('Myreviews');

    useEffect(() => {
        fetch(`https://sadabs-kitchen-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete your review?');
        if (proceed) {
            fetch(`https://sadabs-kitchen-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-5xl text-center font-bold text-green-700 mb-5'>My Reviews {orders.length}</h2>
            {
                orders.length < 1 ?
                    <h1 className='text-5xl'>No Reviews were added</h1>
                    :
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
                                        handleDelete={handleDelete}
                                    ></ReviewRow>)
                                }


                            </tbody>
                        </table>
                    </div>

            }

            <ToastContainer />
        </div>
    );
};

export default Myreviews;