import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => (
  <div className="discography">
    <Link to="/product-description">
      <div className="one_book">
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0880/2454/products/JANE-1_grande.jpg?v=1460749532" width="320" height="350" />
        </div>
        <div className="film_description">
          <div className="release_year">
            <p>2003</p>
			</div>
			<div className="show_title">
			<p>Kill Bill: Vol. 1</p>
			</div>
			<div  className="category">
			<p>Action & Adventure</p>
			</div>
		</div>
        </div>
	  </Link>
<div className="one_book">
	<div>
		<img src="https://cdn.shopify.com/s/files/1/0880/2454/products/savina_-_1_1_grande.png?v=1507665971" width="320" height="350" />
	</div>
	<div class="film_description">
		<div className="release_year">
			<p>1997</p>
		</div>
		<div className="show_title">
			<p>Jackie Brown</p>
		</div>
		<div  className="category">
			<p>Dramas</p>
		</div>
	</div>
</div>
<div className="one_book">
	<div>
		<img src="https://cdn.shopify.com/s/files/1/0880/2454/products/keats_-_1_grande.png?v=1507674606" width="320" height="350" />
	</div>
	<div className="film_description">
		<div className="release_year">
			<p>1992</p>
		</div>
		<div className="show_title">
			<p>Reservoir Dogs</p>
		</div>
		<div  className="category">
			<p>Independent Movies</p>
		</div>
	</div>
</div>
<div className="one_book">
	<div>
		<img src="https://cdn.shopify.com/s/files/1/0880/2454/products/summits_-_1_grande.jpg?v=1505593490" width="320" height="350" />
	</div>
	<div className="film_description">
		<div className="release_year">
			<p>1995</p>
		</div>
		<div className="show_title">
			<p>Four Rooms</p>
		</div>
		<div  className="category">
			<p>Comedies</p>
		</div>
	</div>
</div>
<div className="one_book">
	<div>
		<img src="https://cdn.shopify.com/s/files/1/0880/2454/products/waters-1_-_1_grande.jpg?v=1493493772" width="320" height="350" />
	</div>
	<div className="film_description">
		<div className="release_year">
			<p>1992</p>
		</div>
		<div className="show_title">
			<p>Reservoir Dogs</p>
		</div>
		<div  className="category">
			<p>Independent Movies</p>
		</div>
	</div>
</div>
<div className="one_book">
	<div>
		<img src="https://cdn.shopify.com/s/files/1/0880/2454/products/LUD_grande.jpg?v=1505606608" width="320" height="350" />
	</div>
	<div className="film_description">
		<div className="release_year">
			<p>1992</p>
		</div>
		<div className="show_title">
			<p>Reservoir Dogs</p>
		</div>
		<div  className="category">
			<p>Independent Movies</p>
		</div>
	</div>
</div>
<div className="one_book">
	<div>
		<img src="https://cdn.shopify.com/s/files/1/0880/2454/products/MG_0335_grande.jpg?v=1504981959" width="320" height="350" />
	</div>
	<div className="film_description">
		<div className="release_year">
			<p>1992</p>
		</div>
		<div className="show_title">
			<p>Reservoir Dogs</p>
		</div>
		<div  className="category">
			<p>Independent Movies</p>
		</div>
	</div>
</div>
</div>
);

export default ProductList;