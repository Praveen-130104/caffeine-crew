import React, { useState } from 'react';



function Pastries(props) {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (

        <div className="card  my-3 p-2">
            <img className='card-img-top' src="https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/pastryorg.jpg?alt=media&token=07e71056-4615-4a30-895e-de96a9a418da" alt="" />
            <div className="card-body">
                <h4 className='card-title'>Pastries</h4>
                <p className="card-text">
                    "Indulge in our heavenly pastries."

                    Our pastries are a work of art - crafted with care and attention to detail, they are a feast for both the eyes and the taste buds. From flaky croissants to rich chocolate cakes, our pastry chefs use only the finest ingredients to create desserts that are both beautiful and delicious
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


export default Pastries;