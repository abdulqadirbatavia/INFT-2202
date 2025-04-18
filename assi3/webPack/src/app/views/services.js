function servicesBuilder() {
    return `
        <div class="container mt-4">
            <h1 class="text-center">Our Services</h1>
            <div class="row mt-4">
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Product Delivery</h5>
                            <p class="card-text">Fast and reliable delivery of all our products to your doorstep.</p>
                            <p class="card-text"><strong>Price:</strong> $10.99</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Product Installation</h5>
                            <p class="card-text">Professional installation services for all our products.</p>
                            <p class="card-text"><strong>Price:</strong> $49.99</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Product Maintenance</h5>
                            <p class="card-text">Regular maintenance services to keep your products in top condition.</p>
                            <p class="card-text"><strong>Price:</strong> $29.99/month</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export default servicesBuilder;
