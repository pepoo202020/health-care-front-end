export interface CategoriesIF {
  name: string;
  slogan: string;
}

export const CATEGORIES: CategoriesIF[] = [
  { name: "All Categories", slogan: "all-categories" },
  { name: "Alternative Medicine", slogan: "alternative-medicine" },
  { name: "Diabetes Care", slogan: "diabetes-care" },
  { name: "Ear Care", slogan: "ear-care" },
  { name: "Eye Health", slogan: "eye-health" },
  { name: "Feminine Care", slogan: "feminine-care" },
  { name: "First Aid", slogan: "first-aid" },
  { name: "Foot Health", slogan: "foot-health" },
  { name: "Incontinence & Ostomy", slogan: "incontinence-ostomy" },
  { name: "Insect & Pest Repellents", slogan: "insect-pest-repellents" },
  {
    name: "Over-the-Counter Medication",
    slogan: "over-the-counter-medication",
  },
  {
    name: "Respiratory Aids & Accessories",
    slogan: "respiratory-aids-accessories",
  },
  { name: "Sleep & Snoring", slogan: "sleep-snoring" },
  { name: "Smoking Cessation", slogan: "smoking-cessation" },
  { name: "Women's Health", slogan: "womens-health" },
];

export const CATEGOREAS_SORTED_BY_NAME = CATEGORIES.sort(
  (a: CategoriesIF, b: CategoriesIF) => a.name.localeCompare(b.name)
);
