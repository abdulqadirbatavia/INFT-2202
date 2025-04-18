function createProductBuilder() {
    return `
        <div class="container mt-4">
            <h1 class="text-center">Add to Inventory</h1>
            <form id="create-product-form" novalidate>
                <div class="mb-3">
                    <label for="productName" class="form-label">Product Name</label>
                    <input type="text" class="form-control" id="productName" required>
                    <div class="invalid-feedback">Please enter a product name.</div>
                </div>
                <div class="mb-3">
                    <label for="productDescription" class="form-label">Description</label>
                    <textarea class="form-control" id="productDescription" rows="3" required></textarea>
                    <div class="invalid-feedback">Please enter a product description.</div>
                </div>
                <div class="mb-3">
                    <label for="productStock" class="form-label">Stock Quantity</label>
                    <input type="number" class="form-control" id="productStock" min="0" required>
                    <div class="invalid-feedback">Please enter a valid stock quantity.</div>
                </div>
                <div class="mb-3">
                    <label for="productPrice" class="form-label">Price ($)</label>
                    <input type="number" class="form-control" id="productPrice" min="0.01" step="0.01" required>
                    <div class="invalid-feedback">Please enter a valid price.</div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    `;
}

export default createProductBuilder;
