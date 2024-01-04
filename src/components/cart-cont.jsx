import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

function Carti(props) {

  const [details, setDetails] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const Done = () => window.location.reload();
  const showModal = () => setIsOpen(true);
  const hideModal = () => {
    setIsOpen(false);
      props.setCart([]);
      localStorage.setItem('cart', JSON.stringify([]));
      setTotalPrice(0);
      //set setDtails true after 30 seconds
      setTimeout(() => {
        setDetails(true);
      }, 5000);
  }


  const Click = () => {
    showModal();
  }
  const delCharge = 60;
  const [totalPrice, setTotalPrice] = useState(
    props.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  );


  const updateCart = (index, newQuantity) => {
    if (newQuantity <= 0) removeItem(index)
    else {
      const updatedCart = [...props.cart];
      updatedCart[index].quantity = newQuantity;
      console.log(updatedCart[index].quantity);
      props.setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      const newTotalPrice = updatedCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalPrice(newTotalPrice);
    }
  };


  const removeItem = (index) => {
    const updatedCart = [...props.cart];
    updatedCart.splice(index, 1);
    props.setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const newTotalPrice = updatedCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  const clearCart = () => {
    props.setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    setTotalPrice(0);
  };

  return (
    <div className='container bg-p w-100 h-100 my-5  bp  '>
      <div className='my-5 m-3 d-flex flex-column justify-centent-between   shadow border border-dark border-1 rounded-2 w-100  mx-2'>
        <h1 className='text-center exo my-2'>Cart</h1>

        <div className='container text-center my-3  w-100'>
          <div className='row'>
            <div className='col-3'>
              <h5 className='abril mx-2'>Item</h5>
            </div>

            <div className='col-2 hi'>
              <h5 className='abril mx-2'>Price</h5>
            </div>
            <div className='col-3'>
              <h5 className='abril '>Quantity</h5>
            </div>
            <div className='col-1'>
              <h5 className='abril mx-2'>Total</h5>
            </div>
            <div className='col-2 mx-2 '>
              <h5 className='abril mx-4'>Remove</h5>
            </div>
          </div>
          <div className='my-3'>
            {props.cart.length > 0 &&
              props.cart.map((item, index) => (
                <div className='row my-2 border px-1 box mx-2 rounded-2 py-2'>
                  <div className='col-3'>
                    <h5 className=' mx-2 text-md'>{item.name}</h5>
                  </div>
                  <div className='col-2 hi'>
                    <h5 className=' '>₹{item.price}</h5>
                  </div>
                  <div className='col-3  d-flex justify-content-center mx-2 '>
                    <button
                      className='btn btn-dark btn-sm '
                      style={{ width: '30px', height: '30px' }}
                      onClick={() => updateCart(index, item.quantity - 1)}
                    >
                      -
                    </button>
                    <p className='text-dark mx-2 '>{item.quantity}</p>
                    <button
                      className='btn btn-dark btn-sm text-center'
                      style={{ width: '30px', height: '30px' }}
                      onClick={() => updateCart(index, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className='col-1'>
                    <h5 className=' '>₹{item.price * item.quantity}</h5>
                  </div>
                  <div className='col-2 mrg '>
                    <button
                      className='btn btn-danger btn-sm '
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            {props.cart.length === 0 &&
              <div className='my-5'>
                <h5 className='exo mx-2'>Your cart is empty</h5>
                <Link className='text-dark' to="/menu">
                  Continue Shopping
                </Link>
              </div>
            }
          </div>


        </div>

      </div>
      <div className='my-5 d-flex flex-column  box border border-dark border-1 rounded-2 w-100 h-50 mx-2'>
        {/* <h1 className='text-center exo'>Summary</h1> */}
        <div className="card bg-dark text-center text-light d-flex justify-content-center m-2">
          <div className="p-3">
            <h1 className="exo">Summary</h1>
            <div className="row">
              <p className="col">SUBTOTAL</p>
              <p className="col">{totalPrice}</p>
            </div>
            <div className="row">
              <p className="col">DELIVERY CHARGES</p>
              <p className="col">{totalPrice ? delCharge : ''}</p>
            </div>
            <div className="row">
              <p className="col">TAX</p>
              <p className="col">{(totalPrice * 0.01).toFixed(2)}</p>
            </div>
            <div className="row">
              <h2 className="col text-info">TOTAL</h2>
              <h2 className="col">
                {totalPrice && ((totalPrice + totalPrice * 0.01) + delCharge).toFixed(2)}
              </h2>
            </div>
            <div className="row m-3 p-2 ">
              <button className="btn btn-danger m-2" onClick={clearCart}>
                Empty Cart
              </button>
              <button className="btn btn-info  m-2 " onClick={Click}>
                BUY
              </button>
            </div>
            {!details && <h3>Order Placed Successfully</h3> }
          </div>
        </div>
      </div>
      <div id="myModal" className={`  modal ${isOpen ? 'd-block' : ''}`}>
        <div className="modal-dialog" >
          <div className="modal-content">

            <div className="modal-header">
              <h3 className="modal-title">Order Details</h3>
              <button type="button" className="btn-close" onClick={hideModal}></button>

            </div>

            <div className="modal-body">
              <div className='container'>
                <Form setDetails={setDetails} hideModal={hideModal} />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}
export default Carti