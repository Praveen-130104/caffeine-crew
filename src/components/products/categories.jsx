import React, { useState } from 'react';

function Categories(props) {
    const [activeCategory, setActiveCategory] = useState('coffee');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    }

    const renderCategoryContent = () => {
        switch (activeCategory) {
            case 'coffee':
                return (
                    <div className='text-center mx-3'>
                        <div className='d-flex justify-content-center flex-wrap my-3'>
                            <div style={{ flexBasis: '30%' }}><img src="https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/coffee-menu.jpg?alt=media&token=e3314c82-d52b-414d-b557-33addb1408da" alt="" className="" /></div>
                            <div style={{ flexBasis: '70%', paddingLeft: '1rem' }}>
                                <h1 className='exo'>Coffee</h1>
                                <blockquote className='fc '>"Brewing Happiness in every cup!"</blockquote>
                                <p>Welcome to our online coffee shop, where we strive to create a warm and welcoming atmosphere for coffee enthusiasts. Our hand-selected beans are sourced from the best farms and roasted to perfection, ensuring a rich and flavorful experience in every cup. From a classic drip to a creamy latte, our baristas are dedicated to crafting the perfect brew for you. But we don't stop there - we also offer a variety of delectable pastries and snacks to pair with your coffee. So come in, grab a seat, and let us brew some happiness for you.</p>

                                {props.menu.coffee.map(({ name, price }) => (
                                    <div key={name} className="d-flex justify-content-between align-items-center flex-wrap p-2">
                                        <div className="col">{name}</div>
                                        <div className="col">&#8377; {price}</div>
                                        <div className="col">
                                            <button
                                                className="btn btn-outline-primary btn-sm "
                                                onClick={() =>  props.handleClic({name,price})}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'tea':
                return (
                    <div className='text-center mx-3'>
                        <div className='d-flex justify-content-center flex-wrap my-3'>
                            <div style={{ flexBasis: '30%' }}><img src="https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/tea-menu.jpg?alt=media&token=6737241d-9de8-4884-98bb-aa74af234ef9" alt="" className="" /></div>
                            <div style={{ flexBasis: '70%', paddingLeft: '1rem' }}>
                                <h1 className='exo'>Tea</h1>
                                <blockquote className='fc '>"Steeping Joy in Every Cup!"</blockquote>

                                <p>Welcome to our online tea shop, where we're passionate about bringing you the finest teas from around the world. From classic black teas to soothing herbal blends, we carefully source and blend each tea to ensure a perfect balance of flavor and aroma. Our expert tea sommeliers are dedicated to providing you with a personalized experience, helping you choose the perfect brew for your mood and taste. But we don't just offer tea - we also have a range of delicious pastries and snacks to complement your cup. So why not come in, relax and let us steep some joy for you.
                                </p>

                                {props.menu.tea.map(({ name, price }) => (
                                    <div key={name} className="d-flex justify-content-between align-items-center flex-wrap p-2">
                                        <div className="col">{name}</div>
                                        <div className="col">&#8377; {price}</div>
                                        <div className="col">
                                            <button
                                                className="btn btn-outline-primary btn-sm"
                                                onClick={() =>  props.handleClic({name,price})}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'pastries':
                return (
                    <div className='text-center mx-3'>
                        <div className='d-flex justify-content-center flex-wrap my-3'>
                            <div style={{ flexBasis: '30%' }}><img src="https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/pastry-menu.jpg?alt=media&token=a420bd01-1f73-46b3-b2b6-b7d640de58b2" alt="" className="" /></div>
                            <div style={{ flexBasis: '70%', paddingLeft: '1rem' }}>
                                <h1 className='exo'>Pastries</h1>
                                <blockquote className='fc '>"Brewing Happiness in every cup!"</blockquote>

                                <p>Welcome to our online coffee shop, where we strive to create a warm and welcoming atmosphere for coffee enthusiasts. Our hand-selected beans are sourced from the best farms and roasted to perfection, ensuring a rich and flavorful experience in every cup. From a classic drip to a creamy latte, our baristas are dedicated to crafting the perfect brew for you. But we don't stop there - we also offer a variety of delectable pastries and snacks to pair with your coffee. So come in, grab a seat, and let us brew some happiness for you.</p>

                                {props.menu.pastries.map(({ name, price }) => (
                                    <div key={name} className="d-flex justify-content-between align-items-center flex-wrap p-2">
                                        <div className="col">{name}</div>
                                        <div className="col">&#8377; {price}</div>
                                        <div className="col">
                                            <button
                                                className="btn btn-outline-primary btn-sm"
                                                onClick={() =>props.handleClic({name,price})}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'juices':
                return (
                    <div className='text-center mx-3'>
                        <div className='d-flex justify-content-center flex-wrap my-3'>
                            <div style={{ flexBasis: '30%' }}><img src="https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/juice-menu.jpg?alt=media&token=c276e5c8-f67c-4c30-97f4-acc58dc3176c" alt="" className="" /></div>
                            <div style={{ flexBasis: '70%', paddingLeft: '1rem' }}>
                                <h1 className='exo'>Juices</h1>
                                <blockquote className='fc '>"Brewing Happiness in every cup!"</blockquote>

                                <p>Welcome to our online coffee shop, where we strive to create a warm and welcoming atmosphere for coffee enthusiasts. Our hand-selected beans are sourced from the best farms and roasted to perfection, ensuring a rich and flavorful experience in every cup. From a classic drip to a creamy latte, our baristas are dedicated to crafting the perfect brew for you. But we don't stop there - we also offer a variety of delectable pastries and snacks to pair with your coffee. So come in, grab a seat, and let us brew some happiness for you.</p>

                                {props.menu.juice.map(({ name, price }) => (
                                    <div key={name} className="d-flex justify-content-between align-items-center flex-wrap p-2">
                                        <div className="col">{name}</div>
                                        <div className="col">&#8377; {price}</div>
                                        <div className="col">
                                            <button
                                                className="btn btn-outline-primary btn-sm"
                                                onClick={() =>props.handleClic({name,price})}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light my-2 bg-light">
                <div className="container ">
                    <a className="navbar-brand exo " >Menu</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className={` nav-link ${activeCategory === 'coffee' ? 'it' : ''} `} onClick={() => handleCategoryClick('coffee')} >Coffee</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeCategory === 'tea' ? 'it' : ''} `} onClick={() => handleCategoryClick('tea')} >Tea</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeCategory === 'pastries' ? 'it' : ''} `} onClick={() => handleCategoryClick('pastries')} >Pastries</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeCategory === 'juices' ? 'it' : ''} `} onClick={() => handleCategoryClick('juices')}>Juices</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            {renderCategoryContent()}
        </>


    )
}
export default Categories