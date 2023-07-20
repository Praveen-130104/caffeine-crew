import React from 'react';

function Contact() {
  return (
    <footer className="bg-dark  text-white">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h3>Store location</h3>
            <p>Find your nearest store</p>
            <button type="button" className="btn btn-light">Find A Store</button>
          </div>
          <div className="col-md-4 my-4 my-md-0">
            <h3>Follow Us On</h3>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="" className="nav-link mx-2"><i className="fab fa-facebook"></i></a>
              <a href="" className="nav-link mx-2"><i className="fab fa-instagram"></i></a>
              <a href="" className="nav-link mx-2"><i className="fab fa-youtube"></i></a>
              <a href="" className="nav-link mx-2"><i className="fab fa-twitter"></i></a>
              <a href="" className="nav-link mx-2"><i className="fa fa-envelope"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Subscribe</h3>
            <p>Get about our latest updates</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=' container d-flex justify-content-center '>
        <p>© 2023 Caffeine Crew. All Rights Reserved.   </p>
        <p>&nbsp;This site is made with love by Praveen <i className="fa fa-heart text-danger"></i></p>
        
      </div>
    </footer>
  );
}

export default Contact;
