import React, { useState } from 'react';



function Juice(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (

    <div className="card  my-3 p-2">
      <img className='card-img-top' src="https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/juiceorg.jpg?alt=media&token=ad96ef2b-7b12-4963-a5b9-0509a76a8a07" alt="" />
      <div className="card-body">
        <h4 className='card-title'>Juice</h4>
        <p className="card-text">
          "Freshness in every sip."

          Our juices are bursting with flavor and vitality - made from only the freshest fruits and vegetables, they are a refreshing and healthful way to quench your thirst. From zesty citrus blends to sweet berry smoothies, our juices are carefully crafted to provide you with a boost of energy.
        </p>
        <button className='btn btn-primary stretched-link ' onClick={showModal}>See Menu</button>
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


export default Juice;