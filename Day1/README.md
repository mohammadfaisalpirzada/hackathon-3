# Peerzada Store

**Pakistan’s Premium Customised Gift Marketplace!**

## Concept
Peerzada Store is a Karachi-based E-commerce platform specialising in customised gifts. We offer a wide range of products such as wallets, keychains, pens, frames, and luxurious gift packaging. With nationwide delivery, unmatched quality, and attention to detail, we aim to make every gift personal, meaningful, and unforgettable.

---

## Business Goals

### 1. Problem
- People in Pakistan often face difficulty finding high-quality, customisable gifts with unique designs and premium packaging.
- Delivery and packaging standards are often compromised in local markets.

### 2. Target Audience
- **Individuals:** Celebrating birthdays, weddings, anniversaries, or expressing gratitude.
- **Corporate Clients:** Needing branded gifts for employees, clients, and giveaways.
- **Event Planners:** Seeking thoughtful additions to weddings, mehndis, or formal dinners.

### 3. Products/Services
- **Customised Wallets:** Premium leather wallets engraved with names, initials, or logos.
- **Engraved Keychains & Pens:** Personalised with designs, logos, or names.
- **Photo Frames:** High-quality frames customised with messages, names, or event themes.
- **Gift Packaging:** Luxurious wrapping with customisable tags, ribbons, and premium boxes.

### 4. Differentiation
- **Attention to Quality:** Premium materials ensure every product feels luxurious.
- **Beautiful Packaging:** Custom designs that impress at first glance.
- **Nationwide Delivery:** Reaching even remote areas with secure packaging.
- **Endless Customisation Options:** Giving customers creative control over their gifts.

---

## Data Schema

### Core Entities

#### 1. Products
- **Attributes:**
  - ProductID: Unique identifier for each product.
  - Name: The product name (e.g., “Custom Wallet”).
  - Category: Wallets, Keychains, Pens, Frames, Packaging.
  - BasePrice: Price before customisation.
  - Material: Leather, metal, wood, or others.
  - Stock: Available inventory.
  - CustomisationOptions: Types of customisations allowed (e.g., engraving, printing).
- **Description:** Defines all the products available in the marketplace, including categories, pricing, and available customisation options.

#### 2. Orders
- **Attributes:**
  - OrderID: Unique identifier for each order.
  - CustomerID: Reference to the customer placing the order.
  - ProductDetails: List of products ordered, including customisation details.
  - TotalAmount: Total price after adding customisation and packaging.
  - Status: Order status (e.g., Pending, In Process, Delivered).
  - Timestamp: Date and time of order placement.
- **Description:** Tracks every order's lifecycle, from placement to delivery.

#### 3. Customers
- **Attributes:**
  - CustomerID: Unique identifier for each customer.
  - Name: Full name of the customer.
  - ContactInfo: Phone number and email address.
  - City: Customer's city of residence (e.g., Karachi, Lahore).
  - OrderHistory: List of past orders.
  - Preferences: Saved customisation preferences.
- **Description:** Captures customer information and builds loyalty by tracking order history and preferences.

#### 4. Customisation Requests
- **Attributes:**
  - RequestID: Unique identifier for each customisation request.
  - ProductID: Product being customised.
  - Details: Customisation details (e.g., name, font style, uploaded image).
  - PreviewURL: Link to a visual preview of the customised product.
  - ApprovalStatus: Whether the customer approved the preview.
- **Description:** Manages individual customisation requests for transparency and accuracy.

#### 5. Packaging Options
- **Attributes:**
  - PackageID: Unique identifier for each packaging style.
  - DesignName: Name of the design (e.g., Elegant Black Box).
  - Material: Type of material used (e.g., cardboard, velvet).
  - Price: Additional cost for this packaging option.
  - Availability: Whether the packaging is currently in stock.
- **Description:** Adds a layer of personalisation by allowing customers to choose premium packaging.

#### 6. Delivery Network
- **Attributes:**
  - CourierID: Identifier for delivery personnel or service.
  - Region: The areas covered (e.g., DHA, Gulshan).
  - DeliveryTimeEstimate: Estimated time of delivery.
  - TrackingDetails: Real-time updates on the shipment.
- **Description:** Handles logistics for on-time, secure delivery.

#### 7. Reviews & Feedback
- **Attributes:**
  - ReviewID: Unique identifier for each review.
  - CustomerID: Reference to the reviewing customer.
  - ProductID: Product being reviewed.
  - Feedback: Customer comments.
  - Rating: Star rating out of 5.
- **Description:** Builds community trust and showcases customer satisfaction.

---

## Unique Features

1. **Customisation Studio:** An interactive tool allowing customers to visualise their customisations in real time.
2. **Luxury Packaging Options:** Premium designs for special occasions, such as Eid, weddings, and corporate gifting.
3. **Karachi Express Delivery:** Same-day delivery service for Karachi customers.
4. **Subscription Plans:** Monthly or quarterly subscription boxes featuring curated customised gifts.
5. **Gift Concierge Service:** Assistance with gift ideas, designs, and bulk orders for weddings or corporate events.
6. **Seasonal Themes:** Limited-edition designs and packaging for Ramadan, Eid, Independence Day, and wedding seasons.
7. **Community Features:** A "Gift Stories" section showcasing customer experiences.

---

## Why Peerzada Store Stands Out
- **Rooted in Karachi:** Local insights drive designs and delivery efficiency, reflecting the city’s vibrant culture.
- **Nationwide Reach:** Peerzada Store connects Karachi's quality craftsmanship with customers all over Pakistan.
- **Customer First:** From easy customisation to exceptional delivery, everything revolves around delighting the customer.

---

## Visual Layout

### 1. Homepage Design
- **Header Section:**
  - Logo: "Peerzada Store" with tagline: "Customised Gifts for Every Occasion."
  - Navigation Bar: Home | Products | Customisation Studio | Packaging | Corporate Gifting | About Us | Contact
  - Search bar and user login/signup button.
- **Hero Banner:** High-quality image slider showcasing key products and call-to-action buttons.
- **Categories Section:** Horizontal tiles for product categories.
- **Featured Products:** Carousel of trending products.
- **Customer Reviews:** Scrolling testimonials and photos.
- **Footer:** Quick Links, Social Media, and Contact Details.

### 2. Product Page Layout
- **Left Section:** Large product image with zoom feature.
- **Right Section:** Product details, customisation options, and price.
- **Customisation Preview:** Real-time display of customisation.
- **Reviews Section:** Customer feedback and photos.

### 3. Customisation Studio Layout
- **Canvas Area:** Live preview of the product.
- **Tools:** Add text, upload images, change fonts, and adjust sizes.
- **Save & Proceed Button.**

### 4. Cart & Checkout Layout
- **Cart Page:** List of items with product thumbnails and customisation details.
- **Checkout Page:** Delivery details, payment options, and order summary.

### 5. Mobile-Friendly Design
- Responsive layout with a hamburger menu, simplified product previews, and easy scroll sections.

### 6. Colour Scheme
- **Primary Colours:** Elegant gold, deep brown, and white for a premium feel.
- **Accent Colours:** Subtle pastels for category highlights.

---
