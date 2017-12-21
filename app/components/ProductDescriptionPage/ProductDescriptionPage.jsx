import React from 'react';
import './ProductDescriptionPage.css';

const ProductDescriptionPage = () => (
  <div className="header">
    <div className="header_label">
      <div className="header_down">
        <div className="header_img">
          <img src="https://cdn.shopify.com/s/files/1/0880/2454/products/B_1_grande.jpg?v=1503697024" alt="" width="250" height="320" />
        </div>
        <div className="header_img_description">
          <div className="show_title">
            <p>BARNETT NEWMAN </p>
          </div>
          <div className="author_name">
            <p>by Thomas B. Hess</p>
          </div>
          <div className="book_price">
            <p>35$</p>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Exc.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDescriptionPage;
