import React from 'react';

function AboutStory() {
    return (
        <div className="container my-5" >
            <div className="row">
                <div className="col-md-6">
                    <div className="bio m-3">
                        <h3 className="abril">About Us</h3>
                        <p className="fc">Welcome to Caffeine Crew, a company dedicated to bringing the best coffee experience to our customers. Our journey began with the belief that coffee should not only be a drink but an experience that energizes and inspires people. We handpick the finest coffee beans from the best farms around the world, roast them to perfection, and craft each cup with care and precision. Our baristas are passionate about their craft and dedicated to creating the perfect blend for every customer.

                            At Caffeine Crew, we also believe in creating a welcoming atmosphere where people can gather, relax, and enjoy their coffee with friends and family. We offer a wide range of pastries, sandwiches, and snacks to complement your coffee experience.

                            We are committed to sustainability and environmental responsibility, which is why we source our coffee beans from farmers who practice ethical and sustainable farming methods. We are also dedicated to giving back to the community by supporting local charities and causes that align with our values.

                            We hope that you will join us on this journey and become a part of the Caffeine Crew community.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-12 ">
                    <div className="aboutbg p-3 text-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/about-modified%20(1).jpg?alt=media&token=69dbdd21-fec6-4a54-be1c-833b5de3df76" className='my-3' alt=""/><br /><br />
                        <h4>We do our best</h4><br />
                        <p>At Caffeine Crew, we take pride in producing the highest quality coffee. We source our beans from the best coffee farms and roast them to perfection, ensuring a rich, smooth and full-bodied flavor. Our commitment to quality is unwavering.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutStory;
