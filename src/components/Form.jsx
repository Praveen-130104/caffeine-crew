import React from 'react';

const Form = ({ setDetails , hideModal }) => {

    const sub = (e) => {
        e.preventDefault();
        //send a mail to the user


        setDetails(false);
        hideModal();
        // alert("Order Placed Successfully")
    }
    

    return (
        <form onSubmit={sub}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="to_name" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"  name="to_email" id="exampleInputPassword1" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="number" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary">Place Order</button>
        </form>
    )
}

export default Form;
