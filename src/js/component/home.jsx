import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
						<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown
						</a>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>

							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
						</li>
						<li className="nav-item">
						<a className="nav-link disabled">Disabled</a>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
					</div>
				</div>
			</nav>
			<div className="container">
				<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
					<h1 id="scrollspyHeading1">A Warm Welcome!!!</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit ratione id at adipisci voluptates a esse obcaecati natus, nisi facilis aliquid ipsam vitae sapiente quasi fuga earum eum odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus deserunt praesentium! Voluptatem reprehenderit tempora omnis sunt ipsa neque, similique voluptas aut, eaque minima accusantium dolore nam quia sint quidem. lorem
					</p>
					<a href="#" className="btn btn-primary">Call to action!</a>
				</div>
				<div className="row d-flex justify-content-around mt-2 p-1 gy-3">
					<div class="card me-1">
						<img src="rigo-baby.jpg" class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
					<div class="card">
						<img src="rigo-baby.jpg" class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
					<div class="card">
						<img src="rigo-baby.jpg" class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
					<div class="card">
						<img src="rigo-baby.jpg" class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
					<div class="card">
						<img src="rigo-baby.jpg" class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			</div>
			
		</>
	);
};

export default Home;
