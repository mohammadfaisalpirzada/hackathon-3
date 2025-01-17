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