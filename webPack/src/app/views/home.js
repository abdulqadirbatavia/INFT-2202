function homeBuilder() {
    return `
        <div class="container mt-5">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/pexels.jpeg" class="d-block w-100" alt="Product Image">
                    </div>
                    <div class="carousel-item">
                        <img src="img/pexels.jpeg" class="d-block w-100" alt="Product Image">
                    </div>
                    <div class="carousel-item">
                        <img src="img/pexels.jpeg" class="d-block w-100" alt="Product Image">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="row mt-4">
                <div class="col-md-8">
                    <h1>Welcome to Web Shop</h1>
                    <p class="lead">
                        Discover our amazing products designed to meet your needs.
                    </p>
                    <a href="/products" class="btn btn-primary" data-link>View Products</a>
                </div>
            </div>
        </div>
    `;
}

export default homeBuilder;