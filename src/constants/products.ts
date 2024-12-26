export interface CommentsIF {
  id: number;
  image: string;
  name: string;
  comment: string;
  verified: boolean;
}

interface FeatureContentIF {
  name: string;
  value: string;
}

interface FeatureIF {
  title: string;
  content: FeatureContentIF[];
}

interface MoreInfoIF {
  name: string;
  value: string;
}

export interface ProductIF {
  id: number;
  main_image: string;
  images: string[];
  inStock: boolean;
  title: string;
  price: number;
  discount: number;
  description: string;
  more_info: MoreInfoIF[];
  category: string;
  features: FeatureIF[];
  featured: boolean;
  comments: CommentsIF[];
}

export const products: ProductIF[] = [
  {
    id: 1,
    main_image: "https://m.media-amazon.com/images/I/51nRzxZnnXL._SL1015_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/41GQbab-D5L.jpg",
      "https://m.media-amazon.com/images/I/41PuT892mfL.jpg",
      "https://m.media-amazon.com/images/I/41Vz5WtMMfL.jpg",
      "https://m.media-amazon.com/images/I/51UyV1BJzJL.jpg",
      "https://m.media-amazon.com/images/I/51jZ+keGaML.jpg",
      "https://m.media-amazon.com/images/I/51RbyOG0WjL.jpg",
      "https://m.media-amazon.com/images/I/51tsrQ5SkFL.jpg",
    ],
    inStock: true,
    title: "Majestic Pure, Essential Oil (4 Fl Oz, Lavender)",
    price: 763.05,
    discount: 33,
    description:
      "MAJESTIC PURE Lavender Oil; blend of two (2) pure lavender oil; Lavandula angustifolia from Bulgaria and Lavandula hybrida from France; steam distilled; Therapeutic grade; Packaged in USA",
    more_info: [
      { name: "Brand", value: "Majestic Pure" },
      { name: "Scent", value: "Lavender" },
      { name: "Special Feature", value: "Pure, Undiluted" },
      { name: "Product Benefits", value: "Soothing" },
      { name: "seasons", value: "All Seasons" },
    ],
    category: "Alternative Medicine",
    features: [
      {
        title: "Scent",
        content: [
          { name: "Basil", value: "#32612D" },
          { name: "Bergamot", value: "#D4D957" },
          { name: "BlackSeed", value: "#1C1C1B" },
          { name: "Blackpepper", value: "#504A4B" },
          { name: "Cassia", value: "#DC9C76" },
          { name: "Cedarwood", value: "#745F4D" },
          { name: "Chamomile", value: "#F7E5B7" },
          { name: "Cinnamon", value: "#7E4B3C" },
          { name: "Cinnamon Oil", value: "#9E5B40" },
          { name: "Clary Sage", value: "#7F8F7A" },
          { name: "Eucalyptus", value: "#4E6A47" },
          { name: "Frankincense", value: "#B59A72" },
          { name: "Geranium", value: "#E7A7B3" },
          { name: "Ginger Oil", value: "#D17C3B" },
          { name: "Grapefruit", value: "#F75B5B" },
        ],
      },
      {
        title: "Sizes",
        content: [
          { name: "1 Fl Oz", value: "1 Fl Oz" },
          { name: "2 Fl Oz", value: "2 Fl Oz" },
          { name: "3.4 Fl Oz", value: "3.4 Fl Oz" },
          { name: "4 Fl Oz", value: "4 Fl Oz" },
        ],
      },
    ],
    featured: true,
    comments: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Abanob Shenoda",
        comment:
          "Highly recommend these pants, both the comfort and style meet my expectations, wearing them makes me feel very confident.",
        verified: true,
      },
    ],
  },
  {
    id: 2,
    main_image:
      "https://m.media-amazon.com/images/I/710IP6q0O6L._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71ak-cNf8rL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81f7eFLhEsL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81QgMnkRvjL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81tZcUij+yL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71UNklEtO3L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81KO2F+f9IL._AC_SL1500_.jpg",
    ],
    inStock: true,
    title:
      "UpNature Calm Essential Oil Roll On - Stocking Stuffers for Women - 100% Natural Relaxation Self Care Gifts",
    price: 508.02,
    discount: 0,
    description:
      "Enhance Self Care - Discover the power of relaxation with UpNature's Calm Essential Oil Roll-On Blend. This 100% natural aromatherapy oil is designed to soothe your senses, and promote a serene state of mind. Perfect for unwinding after a long day, this roll-on is an essential addition to your self-care regimen, helping you find calm and balance whenever you need it.",
    more_info: [
      { name: "Brand", value: "UpNature" },
      { name: "Scent", value: "Calm" },
      { name: "Special Feature", value: "Pure" },
      { name: "Product Benefits", value: "Relaxation, Stress Relief" },
      { name: "seasons", value: "All Seasons" },
    ],
    category: "Alternative Medicine",
    features: [
      {
        title: "Scent",
        content: [
          { name: "Breathe", value: "#A0D8D1" },
          { name: "Calm", value: "#A4D7E3" },
          { name: "Citronella", value: "#9C8B3B" },
          { name: "Dream", value: "#B7A7D6" },
          { name: "Frankincense", value: "#B59A72" },
          { name: "Frankincense Oil + Myrrh Oil", value: "#6A4E3C" },
          { name: "Head Ease", value: "#A8C8D4" },
          { name: "Lavender", value: "#B497D6" },
          { name: "Pappermint", value: "#4B9E9A" },
          { name: "Rosemary", value: "#6A7F4D" },
          { name: "Shield", value: "#8C9A5B" },
          { name: "Tea Tree", value: "#6B8C3C" },
        ],
      },
    ],
    featured: false,
    comments: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Kiven Bidwell",
        comment:
          "Highly recommend these pants, both the comfort and style meet my expectations, wearing them makes me feel very confident.",
        verified: true,
      },
    ],
  },
  {
    id: 3,
    main_image:
      "https://m.media-amazon.com/images/I/71fmkg+Sb-L._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71+t+6Lxd4L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61Sll5lJjHL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yjYU81-xL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71MmzMIgMbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/718ukUCVpJL._AC_SL1500_.jpg",
    ],
    inStock: true,
    title:
      "CONTOUR NEXT Blood Glucose Test Strips for Diabetes, 70 Count (Pack of 1)",
    price: 508.02,
    discount: 0,
    description:
      "Highly accurate testing: test strips for use with the contour next range of blood glucose meters.",
    more_info: [
      { name: "Brand", value: "Ascensia" },
      { name: "Number of Pieces", value: "70" },
      {
        name: "Special Feature",
        value: "Easy to Use, Instant Result, Accurate",
      },
      { name: "Test type", value: "['Blood Glucose']" },
      {
        name: "Model Name",
        value: "CONTOUR NEXT Blood Glucose Test Strips, 70 Count",
      },
    ],
    category: "Diabetes Care",
    features: [
      {
        title: "Size",
        content: [
          { name: "70 Count", value: "70 Count" },
          { name: "15 Count", value: "15 Count" },
          { name: "35 Count", value: "35 Count" },
        ],
      },
    ],
    featured: true,
    comments: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Min An",
        comment:
          "Highly recommend these pants, both the comfort and style meet my expectations, wearing them makes me feel very confident.",
        verified: true,
      },
    ],
  },
  {
    id: 4,
    main_image:
      "https://m.media-amazon.com/images/I/81KoV1reZXL._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71muwkZy5TL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61q5rESUMVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71HV57B4tPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/718rpPaBmiL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/712+XkIKJCL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91tQAbPmx7L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81QtVXeA1QL._AC_SL1500_.jpg",
    ],
    inStock: true,
    title:
      "OneTouch Verio Test Strips for Diabetes Value Pack - 90 Count | Diabetic Test Strips for Blood Sugar Monitor | Home Self Glucose Testing | 3 Boxes, 30 Test Strips Per Pack",
    price: 1679.32,
    discount: 0,
    description:
      "More Strips, Better Value: Complete your diabetes testing kit with OneTouch Verio Test Strips. With this value bundle, you get 90 blood glucose test strips for an affordable price. Includes 3 boxes containing 30 test strips each.",
    more_info: [
      { name: "Brand", value: "OneTouch" },
      { name: "Number of Pieces", value: "90" },
      {
        name: "Special Feature",
        value: "Easy to Use, Instant Result",
      },
      { name: "Test type", value: "['ood Gluco']" },
      {
        name: "Specific Uses For Product",
        value: "Blood Glucose Test",
      },
    ],
    category: "Diabetes Care",
    features: [
      {
        title: "Size",
        content: [
          { name: "30 Count (Pack of 3)", value: "30 Count (Pack of 3)" },
          { name: "30 Count (Pack of 2)", value: "30 Count (Pack of 2)" },
          { name: "30 Count (Pack of 6)", value: "30 Count (Pack of 6)" },
        ],
      },
    ],
    featured: false,
    comments: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Min An2",
        comment:
          "Highly recommend these pants, both the comfort and style meet my expectations, wearing them makes me feel very confident.",
        verified: true,
      },
    ],
  },
  {
    id: 5,
    main_image:
      "https://m.media-amazon.com/images/I/51vun8qtNlL._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81gaz88pIJL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61qXn2eCl5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71PAgzOxOPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/514OANn80AL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/617lNEr0NGL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Om8uNnPtL._AC_SL1500_.jpg",
    ],
    inStock: true,
    title:
      "Loop Quiet 2 Ear Plugs – Ultra-Comfy Reusable Noise-Reducing Earplugs for Sleep, Deep Focus, Travel, Noise Sensitivity | Flexible Hearing Protection | Customizable Fit | 24dB (SNR) Noise Reduction",
    price: 1117.34,
    discount: 21,
    description:
      "POWERFUL NOISE REDUCTION – Packing up to 24 dB (SNR) of noise reduction into a flexible silicone earplug, Quiet 2 muffles unwanted noise in comfort and style. Get in your quiet bubble anywhere for improved sleep, deep focus, stress-free travel and beyond. Quiet 2 earplugs qualify as certified hearing protection to keep your ears safe from damaging sounds.",
    more_info: [
      { name: "Brand", value: "Loop" },
      { name: "Color", value: "Black" },
      { name: "Material", value: "Silicone" },
      {
        name: "Recommended Uses For Product",
        value: "Noise Protection, Sleep, Deep Focus, Travel, Sensitivity",
      },
      { name: "Size", value: "1 Count (Pack of 1)" },
    ],
    category: "Ear Care",
    features: [
      {
        title: "Color",
        content: [
          { name: "Black", value: "#000000" },
          { name: "Bubble Blue", value: "#A1C6EA" },
          { name: "Coral Crush", value: "#F16D6D" },
          { name: "Denim Dream", value: "#3A5A75" },
          { name: "Golden Hour", value: "#F2A800" },
          { name: "Lemon Lime", value: "#D4E300" },
          { name: "Mint", value: "#A8D5BA" },
          { name: "Sugar Plum", value: "#9E4F6E" },
          { name: "Violet", value: "#8A2BE2" },
          { name: "White", value: "#ffffff" },
        ],
      },
    ],
    featured: true,
    comments: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Min An3",
        comment:
          "Highly recommend these pants, both the comfort and style meet my expectations, wearing them makes me feel very confident.",
        verified: false,
      },
    ],
  },
];
