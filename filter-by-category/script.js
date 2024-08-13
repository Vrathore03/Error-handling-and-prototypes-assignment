function createCategoryFilter(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage:
const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Headphones', category: 'Electronics' },
    { name: 'Jacket', category: 'Clothing' }
];

// Create a filter function for 'Electronics'
const filterByCategory = createCategoryFilter(products);

// Filter products by the 'Electronics' category
const electronicsProducts = filterByCategory('Electronics');

console.log(electronicsProducts);
// Output: 
// [
//     { name: 'Laptop', category: 'Electronics' },
//     { name: 'Headphones', category: 'Electronics' }
// ]
