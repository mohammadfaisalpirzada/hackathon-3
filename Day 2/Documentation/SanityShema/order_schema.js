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

