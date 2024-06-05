export const color =[
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        option: [
            {value: "white", label: "White" },
            {value: "beige", label: "Beige" },
            {value: "blue", label: "Blue" },
            {value: "brown", label: "Brown" },
            {value: "green", label: "Green" },
            {value: "purple", label: "Purple" },
            {value: "yellow", label: "Yellow" },
        ],
    },
    {
        id: "size",
        name: "Size",
        option: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
        ],
    },
];       

export const singleFilter=[
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "rwf159 To rwf399" },
            { value: "399-999", label: "rwf399 To rwf999" },
            { value: "999-1999", label: "rwf999 To rwf1999" },
            { value: "1999-2999", label: "rwf1999 To rwf2999" },
            { value: "3999-4999", label: "rwf3999 To rwf4999" },
    
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {
                value: "10",
                label: "10% And Above",
            },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock"},
            { value: "out_of_stock", label: "Out Of Stock"},

        ],
    },
]

export const sortOptions = [
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
];
