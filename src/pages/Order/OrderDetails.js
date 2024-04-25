import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const OrderDetails = () => {
  const { orderId } = useParams();

  const {data: orderItems, isPending: dataItemsisPending} = useFetch('http://localhost:8080/order/items/' + orderId);
  const {data: order, isPending: orderIsPending} = useFetch('http://localhost:8080/order/details/' + orderId);

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

    return (
        <div>
            <h1 className='text-center'>Order details</h1>

            {orderIsPending ? <div>Loading...</div> :
                <div className='d-flex justify-content-center'>
                    <div className='col-md-5'>
                        <table className="table col-1 table-borderless">
                            <tbody>
                            <tr>
                                <td className="text-right"><b>Order ID:</b></td>
                                <td className="text-left">{order.id}</td>
                            </tr>
                            <tr>
                                <td className="text-right"><b>Order time:</b></td>
                                <td className="text-left">{order.dateTime}</td>
                            </tr>
                            <tr>
                                <td className="text-right"><b>Name:</b></td>
                                <td className="text-left" >{order.appUser.name}</td>
                            </tr>
                            <tr>
                                <td className="text-right"><b>Surname:</b></td>
                                <td className="text-left" >{order.appUser.surname}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
            }
            {dataItemsisPending ? <div>Loading...</div> :
                <div className='d-flex justify-content-center'>
                    <div className='col-md-9'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="align-middle text-center">Product code</th>
                                    <th className="align-middle text-center">Product name</th>
                                    <th className="align-middle text-center">Volume</th>
                                    <th className="align-middle text-center">Unit price</th>
                                    <th className="align-middle text-center">Total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderItems.map(orderItem => (
                                        <tr key={orderItem.id}>
                                        <td className="align-middle text-center">{orderItem.item.productCode}</td>
                                        <td className="align-middle">{orderItem.item.productName}</td>
                                        <td className="align-middle text-center">{orderItem.volume}</td>
                                        <td className="align-middle text-end pe-4">{formatter.format(orderItem.item.price)}</td>
                                        <td className="align-middle text-end pe-4">{formatter.format(orderItem.item.price * orderItem.volume)}</td>
                                        </tr>
                                    ))
                                }
                    
                                <tr className="bg-transparent border-0">
                                    <td colSpan="4" className="text-end align-middle fw-bold border-0">Total Price:</td>
                                    <td className="align-middle fw-bold text-end pe-4 border-0">{formatter.format(order.totalPrice)}</td>
                                    <td className='border-0'></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
};

export default OrderDetails