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