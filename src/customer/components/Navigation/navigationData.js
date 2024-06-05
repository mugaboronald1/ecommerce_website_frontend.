
export const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Trr fall bundle with off-white, ochre, olive, and black Tee.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Top5", id: "top", href: "{women/clothing/top5}" },
            { name: "Dresses", id: "women_dress", href: "#" },
            { name: "Women Jeans", id: "women_jeans" },
            { name: "Lengha Choli", id: "lengha_choli" },
            { name: "Sweaters", id: "sweater" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "jacket" },
            { name: "Gouns", id: "gouns" },
            { name: "Sarees", id: "saree" },
            { name: "Kurtas", id: "kurtas" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watch" },
            { name: "Wallets", id: "wallet" },
            { name: "Bags", id: "bag" },
            { name: "Sunglasses", id: "sunglasse" },
            { name: "Hats", id: "hat" },
            { name: "Belts", id: "belt" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", id: "#" },
            { name: "Dresses", id: "#" },
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfelt", id: "#" },
            { name: "Signifant Other", id: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          id: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "DrawString top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          id: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hand.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Mens Kurtas", id: "mens_kurta" },
            { name: "Shirt", id: "shirt" },
            { name: "Men Jeans", id: "men_jeans" },
            { name: "Sweaters", id: "#" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "#" },
            { name: "Activewear", id: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "#" },
            { name: "Wallets", id: "#" },
            { name: "Bags", id: "#" },
            { name: "Sunglasses", id: "#" },
            { name: "Hats", id: "#" },
            { name: "Belts", id: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfelt", id: "#" },
            { name: "Signifant Other", id: "#" },
            { name: "Full Nelson", id: "#" },
            { name: "My Way", id: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", id: "/" },
    { name: "Stores", id: "/" },
  ],
}
