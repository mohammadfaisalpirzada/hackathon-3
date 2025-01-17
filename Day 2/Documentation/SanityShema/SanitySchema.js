// Sanity Schema for Peerzada Store

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

// Customer Schema
export const customer = {
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    { name: 'name', type: 'string', title: 'Full Name' },
    { name: 'email', type: 'string', title: 'Email Address' },
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'address', type: 'string', title: 'Address' },
    { name: 'city', type: 'string', title: 'City' },
    {
      name: 'orderHistory',
      type: 'array',
      title: 'Order History',
      of: [{ type: 'reference', to: [{ type: 'order' }] }],
    },
  ],
};

// Order Schema
export const order = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    { name: 'orderId', type: 'string', title: 'Order ID' },
    { name: 'customer', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
    {
      name: 'products',
      type: 'array',
      title: 'Ordered Products',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'product', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
          ],
        },
      ],
    },
    { name: 'total', type: 'number', title: 'Total Amount' },
    { name: 'status', type: 'string', title: 'Order Status' },
    { name: 'createdAt', type: 'datetime', title: 'Created At' },
  ],
};

// Packaging Options Schema
export const packagingOption = {
  name: 'packagingOption',
  type: 'document',
  title: 'Packaging Option',
  fields: [
    { name: 'name', type: 'string', title: 'Packaging Name' },
    { name: 'material', type: 'string', title: 'Material' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'availability', type: 'boolean', title: 'Availability' },
  ],
};

// Shipment Tracking Schema
export const shipment = {
  name: 'shipment',
  type: 'document',
  title: 'Shipment',
  fields: [
    { name: 'order', type: 'reference', to: [{ type: 'order' }], title: 'Order' },
    { name: 'trackingId', type: 'string', title: 'Tracking ID' },
    { name: 'status', type: 'string', title: 'Shipment Status' },
    { name: 'ETA', type: 'datetime', title: 'Estimated Delivery Time' },
  ],
};

// Export All Schemas
export const schemaTypes = [product, customer, order, packagingOption, shipment];
