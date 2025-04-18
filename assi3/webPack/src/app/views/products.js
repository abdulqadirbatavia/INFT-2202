function productsBuilder() {
    const html = `
        <div class="container mt-4">
            <h1 class="text-center">Our Products</h1>

            <!-- Add items per page selector -->
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="itemsPerPage" class="form-label">Items per page:</label>
                    <select id="itemsPerPage" class="form-select w-auto">
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>

            <!-- Loading spinner -->
            <div id="loadingSpinner" class="text-center my-5" style="display: none;">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-2">Loading...</p>
            </div>

            <!-- Message container -->
            <div id="messageContainer" class="container mt-3" style="display: none;">
                <div class="alert" role="alert"></div>
            </div>

            <table id="product-list" class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Listed By</th>
                        <th>Listed At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Sample product data -->
                    <tr>
                        <td>Product 1</td>
                        <td>This is a sample product</td>
                        <td>10</td>
                        <td>$19.99</td>
                        <td>100928644</td>
                        <td>2023-04-18 12:00:00</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Product 2</td>
                        <td>Another sample product</td>
                        <td>5</td>
                        <td>$29.99</td>
                        <td>100928644</td>
                        <td>2023-04-18 12:30:00</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Pagination controls -->
            <nav aria-label="Product pagination">
                <ul class="pagination justify-content-center" id="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" id="prev-page">Previous</a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="#" data-page="1">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" data-page="2">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" data-page="3">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" id="next-page">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    `;

    // After the HTML is inserted into the DOM, set up event listeners
    setTimeout(() => {
        setupPaginationListeners();
        setupItemsPerPageListener();
    }, 0);

    return html;
}

// Set up pagination event listeners
function setupPaginationListeners() {
    const pageLinks = document.querySelectorAll('.pagination .page-link[data-page]');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');

    // Current page and total pages
    let currentPage = 1;
    const totalPages = pageLinks.length;

    // Function to update active page
    function updateActivePage(newPage) {
        // Update current page
        currentPage = newPage;

        // Update active class
        pageLinks.forEach(link => {
            const page = parseInt(link.getAttribute('data-page'));
            const parentLi = link.parentElement;

            if (page === currentPage) {
                parentLi.classList.add('active');
            } else {
                parentLi.classList.remove('active');
            }
        });

        // Update prev/next buttons
        if (currentPage === 1) {
            prevButton.parentElement.classList.add('disabled');
        } else {
            prevButton.parentElement.classList.remove('disabled');
        }

        if (currentPage === totalPages) {
            nextButton.parentElement.classList.add('disabled');
        } else {
            nextButton.parentElement.classList.remove('disabled');
        }

        // Update product display (in a real app, this would fetch new data)
        updateProductDisplay(currentPage);
    }

    // Add click event listeners to page links
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = parseInt(link.getAttribute('data-page'));
            updateActivePage(page);
        });
    });

    // Add click event listeners to prev/next buttons
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            updateActivePage(currentPage - 1);
        }
    });

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            updateActivePage(currentPage + 1);
        }
    });
}

// Set up items per page listener
function setupItemsPerPageListener() {
    const itemsPerPageSelect = document.getElementById('itemsPerPage');
    if (itemsPerPageSelect) {
        itemsPerPageSelect.addEventListener('change', () => {
            // In a real app, this would update the number of items shown per page
            // For now, we'll just reload the current page
            const currentPage = document.querySelector('.pagination .active a').getAttribute('data-page');
            updateProductDisplay(parseInt(currentPage));
        });
    }
}

// Function to update product display based on page
function updateProductDisplay(page) {
    // In a real app, this would fetch data for the selected page
    // For this demo, we'll just show different products for different pages
    const productList = document.querySelector('#product-list tbody');

    // Show loading spinner
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'block';
    }

    // Simulate loading delay
    setTimeout(() => {
        // Hide loading spinner
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }

        // Update product list based on page
        if (productList) {
            if (page === 1) {
                productList.innerHTML = `
                    <tr>
                        <td>Product 1</td>
                        <td>This is a sample product</td>
                        <td>10</td>
                        <td>$19.99</td>
                        <td>100928644</td>
                        <td>2023-04-18 12:00:00</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Product 2</td>
                        <td>Another sample product</td>
                        <td>5</td>
                        <td>$29.99</td>
                        <td>100928644</td>
                        <td>2023-04-18 12:30:00</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                `;
            } else if (page === 2) {
                productList.innerHTML = `
                    <tr>
                        <td>Product 3</td>
                        <td>Page 2 product</td>
                        <td>15</td>
                        <td>$39.99</td>
                        <td>100928644</td>
                        <td>2023-04-19 10:00:00</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Product 4</td>
                        <td>Another page 2 product</td>
                        <td>8</td>
                        <td>$49.99</td>
                        <td>100928644</td>
                        <td>2023-04-19 11:30:00</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                `;
            } else if (page === 3) {
                productList.innerHTML = `
                    <tr>
                        <td>Product 5</td>
                        <td>Page 3 product</td>
                        <td>20</td>
                        <td>$59.99</td>
                        <td>100928644</td>
                        <td>2023-04-20 09:00:00</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Product 6</td>
                        <td>Another page 3 product</td>
                        <td>12</td>
                        <td>$69.99</td>
                        <td>100928644</td>
                        <td>2023-04-20 10:30:00</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                `;
            }
        }
    }, 500); // 500ms delay to simulate loading
}

export default productsBuilder;