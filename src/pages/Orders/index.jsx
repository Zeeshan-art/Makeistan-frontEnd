import React, {useState, useEffect} from 'react';
import DashboardHeader from './';

import all_orders from '../../constants/orders';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import '../styles.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';
import { sellerOrders } from '../../redux/slice/orders/thunk';
import { useDispatch, useSelector } from 'react-redux';

function Orders () {
    const {orders} = useSelector((state)=> state.orders)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(sellerOrders());
    },[]);
    // const [search, setSearch] = useState('');
    // const [orders, setOrders] = useState(dispatch(sellerOrders()));
    // const [page, setPage] = useState(1);
    // const [pagination, setPagination] = useState([]);

    // useEffect(() => {
    //     setPagination(calculateRange(dispatch(sellerOrders()), 5));
    //     setOrders(sliceData(dispatch(sellerOrders()), page, 5));
    // }, []);

    // // Search
    // const __handleSearch = (event) => {
    //     setSearch(event.target.value);
    //     if (event.target.value !== '') {
    //         let search_results = orders.filter((item) =>
    //             item.first_name.toLowerCase().includes(search.toLowerCase()) ||
    //             item.last_name.toLowerCase().includes(search.toLowerCase()) ||
    //             item.product.toLowerCase().includes(search.toLowerCase())
    //         );
    //         setOrders(search_results);
    //     }
    //     else {
    //         __handleChangePage(1);
    //     }
    // };

    // // Change Page 
    // const __handleChangePage = (new_page) => {
    //     setPage(new_page);
    //     setOrders(sliceData(dispatch(sellerOrders()), new_page, 5));
    // }

    return(
        <div className='dashboard-content'>
            {/* <DashboardHeader
                btnText="New Order" /> */}

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Orders List</h2>
                    {/* <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div> */}
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                        <th>COSTUMER</th>
                        <th>PRODUCT</th>
                        <th>REVENUE</th>
                    </thead>

                    {orders.length !== 0 ?
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td><span>{order.orderId}</span></td>
                                    <td><span>{order.date}</span></td>
                                    <td><span>{order.orderStatus}</span></td>
                                    {/* <td>
                                        <div>
                                            {order.status === 'Paid' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Canceled' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'pending' ?
                                                <img
                                                    src={RefundedIcon}
                                                    alt='refunded-icon'
                                                    className='dashboard-content-icon' />
                                            : null}
                                            <span>{order.orderStatus}</span>
                                        </div>
                                    </td> */}
                                    {/* <td>
                                        <div>
                                            <img 
                                                src={order.avatar}
                                                className='dashboard-content-avatar'
                                                alt={order.first_name + ' ' +order.last_name} />
                                            <span>{order.first_name} {order.last_name}</span>
                                        </div>
                                    </td> */}
                                    {/* <td><span>{order.product}</span></td>
                                    <td><span>${order.price}</span></td> */}
                                </tr>
                            ))}
                        </tbody>
                    : <span className='empty-table'>No data</span>}
                </table>

                {/* {orders.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                } */}
            </div>
        </div>
    )
}

export default Orders;