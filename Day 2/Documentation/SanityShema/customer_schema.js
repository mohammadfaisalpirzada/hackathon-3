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