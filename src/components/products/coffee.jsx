import React, { useState } from 'react';

function Coffee(props) {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  const handleAddToCart = (name, price) => {
    props.addToCart({ name, price });
    setIsOpen(false);
  };

  return (
    <div className="card my-3 p-2">
       <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/coffeeorg.jpg?alt=media&token=889cda77-63dc-4531-ac10-f9348a82f0e9" alt="" />

      <div className="card-body">
        <h4 className="card-title">Coffee</h4>
        
        <>
          <p className="card-text">
          "Life is too short for bad coffee."

          Life is too short to settle for mediocre coffee. That's why we strive to bring you the best cup of coffee possible. From carefully selecting high-quality beans to expertly roasting and brewing them, we're committed to delivering a rich, flavorful experience in every cup. Take a sip .
        </p>
        {props.menu && <button className="btn btn-primary stretched-link" onClick={showModal}>
          See Menu
        </button>}
        </>
      </div>
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
      
    </div>
  );
}

export default Coffee;
