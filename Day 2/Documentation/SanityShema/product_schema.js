// Product Schema
export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'category', type: 'string', title: 'Category' },
      { name: 'image', type: 'image', title: 'Product Image' },
      {
        name: 'customisationOptions',
        type: 'array',
        title: 'Customisation Options',
        of: [{ type: 'string' }],
      },
    ],
  };