import React from 'react'

function Home(props) {
    return (
        <>
            <div className="header">
                <p>
                    <strong>Dashborad</strong>
                </p>
                <img src="Cart.png" alt="" />
            </div>
            <div className="page">
                <h4>Select the Best Product Suited for your need</h4>
                <div className="Box">
                    <div className="first-part">
                        <h5>Hot Bot</h5>
                        <img src="Bot3.png" alt="" />
                    </div>
                    <div className="second-part">
                        <p>Index Value</p>
                        <h5>2383.36</h5>
                    </div>
                    <div className="third-part">
                        <p>CAGR</p>
                        <h5>22.63%</h5>
                    </div>
                    <div className="fourth-part">
                        <button className="fst-btn">View Product</button>
                        <br />
                        <button
                            onClick={() => props.addToCartHandler()}
                            className="secnd-btn"
                        >
                            Buy
                        </button>
                    </div>
                </div>
                <div className="Box">
                    <div className="first-part">
                        <h5>Cool Bot</h5>
                        <img src="Bot2.png" alt="" />
                    </div>
                    <div className="second-part">
                        <p>Index Value</p>
                        <h5>1104.76</h5>
                    </div>
                    <div className="third-part">
                        <p>CAGR</p>
                        <h5>36.02%</h5>
                    </div>
                    <div className="fourth-part">
                        <button className="fst-btn">View Product</button>
                        <br />
                        <button
                            onClick={() => props.addToCartHandler()}
                            className="secnd-btn"
                        >
                            Buy
                        </button>
                    </div>
                </div>
                <div className="Box">
                    <div className="first-part">
                        <h5>Option Bot</h5>
                        <img src="Bot1.png" alt="" />
                    </div>
                    <div className="second-part">
                        <p>Index Value</p>
                        <h5>968.47</h5>
                    </div>
                    <div className="third-part">
                        <p>CAGR</p>
                        <h5>28.54%</h5>
                    </div>
                    <div className="fourth-part">
                        <button className="fst-btn">View Product</button>
                        <br />
                        <button
                            onClick={() => props.addToCartHandler()}
                            className="secnd-btn"
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home
