export interface CategoriesIF {
  name: string;
  slogan: string;
}

export const CATEGORIES: CategoriesIF[] = [
  { name: "All Categories", slogan: "all-categories" },
  { name: "primary care", slogan: "primary-care" },
  { name: "hospitals", slogan: "hospitals" },
  { name: "Addiction services clinics", slogan: "addiction-services-clinics" },
  { name: "Home care", slogan: "home-care" },
  { name: "Birth centers", slogan: "birth-centers" },
  { name: "Occupational Therapy", slogan: "occupational-therapy" },
  { name: "Physical therapy", slogan: "physical-therapy" },
  { name: "Nursing", slogan: "nursing" },
  { name: "Secondary care", slogan: "secondary-care" },
  { name: "Community Health", slogan: "community-health" },
  { name: "Mobile clinics", slogan: "mobile-clinics" },
  { name: "Doctor Care", slogan: "doctor-care" },
  { name: "Orthopedics", slogan: "orthopedics" },
  { name: "Dentistry", slogan: "dentistry" },
  { name: "Tertiary care", slogan: "tertiary-care" },
  { name: "Dialysis centers", slogan: "dialysis-centers" },
  {
    name: "Ambulatory surgical centres",
    slogan: "ambulatory-surgical-centres",
  },
  { name: "Long-term care", slogan: "long-term-care" },
  { name: "Palliative care", slogan: "palliative-care" },
];

export const CATEGOREAS_SORTED_BY_NAME = CATEGORIES.sort(
  (a: CategoriesIF, b: CategoriesIF) => a.name.localeCompare(b.name)
);
