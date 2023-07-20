import React, { useState } from 'react';

function Carti(props) {


  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  const Done = () => window.location.reload();
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
    // <div className="conatiner ">
      <div className="d-flex flex-wrap my-5 container"  >
        <div className="col-md-6 col-sm-12 my-3 ">
          <div className="mn text-center">
            <h3 className=" " >
              GET YOUR FREE SHIPPING WITH OUR CREW. ON EVERY ORDER. EVERY TIME
            </h3>
            <small className="">Read the terms and conditions</small>
            <br />
          </div>
          <div className="my-3 bg-dark text-light text-center p-2">
            <h3>
              Your Cart {props.cart == 0? null : <span>({props.cart.length})</span>}
            </h3>
          </div>
          <div className="p-0">
            <ul>
              {props.cart.map((item, index) => (
                <div className="d-flex p-3 justify-content-between" key={index} style={{width:'100%'}}>
                <div className="col-3">{item.name}</div>
                <div className="">{item.price}</div>
                <div className="">
                  <button className="btn btn-outline-primary" onClick={() => updateCart(index, item.quantity - 1)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-outline-primary" onClick={() => updateCart(index, item.quantity + 1)}>+</button>
                </div>
                <div className="">{item.price * item.quantity}</div>
                <div className="">
                  <button className="btn btn-outline-primary" onClick={() => removeItem(index)}>Remove</button>
                </div>
              </div>
              
              ))}
            </ul>
          </div>

        </div>
        <div className="col-md-6 col-sm-12 my-2 " style={{}}>
          {/* <div className="bg-primary col-sm-12">
          <div className="card bg-dark text-center text-light   m-2" > */}
          
            <div className="card bg-dark text-center text-light d-flex justify-content-center m-2">
              <div className="p-3">
                <h1 className="abril">Summary</h1>
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
                <div className="row m-3 p-2">
                  <button className="btn btn-danger m-2" onClick={clearCart}>
                    Empty Cart
                  </button>
                  <button className="btn btn-info  m-2" onClick={Click}>
                    BUY
                  </button>
                </div>
              </div>
            </div>
            
          
          <div  id="myModal" className={`  modal ${isOpen ? 'd-block' : ''}`}>
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order Placed</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <h2 className='text-success'>Your Order was placed Successfully</h2>
                <button className="btn btn-success" onClick={() => Done()}>Done</button>

              </div>
            </div>
          </div>
        </div>
      </div>
          

          </div>
         </div>
      
  )
}
export default Carti