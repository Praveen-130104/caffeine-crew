import React, { useState } from 'react';

function Tea(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (

    <div className="card  my-3 p-2">
<img className="card-img-top" src='https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/teaorg.jpg?alt=media&token=94e315e8-8ba7-4775-988a-236e465ef05f' alt="" />

      <div className="card-body">
        < h4 className='card-title'>Tea</h4>
        
          <>
            <p className="card-text">

              There's something special about the ritual of tea time - taking a few moments to slow down, relax, and savor a warm cup of tea. From soothing chamomile to invigorating green tea, there's a tea for every mood and occasion. At our tea company, we're passionate about creating blends that delight the senses.
            </p>
            <button className='btn btn-primary stretched-link ' onClick={showModal}>See Menu</button>
          </>
      </div>
      <>

      {props.menu && (
              <div
                className={`modal ${isOpen ? 'd-block' : ''}`}
                tabIndex="-1"
                role="dialog"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Menu</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={hideModal}
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="container">
                        {props.menu.map(({ name, price }) => (
                          <div key={name} className="row p-2">
                            <div className="col">{name}</div>
                            <div className="col">&#8377; {price}</div>
                            <div className="col">
                              <button
                                className="btn p-1  px-3  btn-outline-primary btn-sm"
                                onClick={() => props.handleClic({ name, price })}
                              >
                                <i className="fa-solid fa-cart-shopping fs-4 "></i>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
      </>
    </div>

  );
}


export default Tea;