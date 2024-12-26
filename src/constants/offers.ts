export interface OFFERIF {
  id: number;
  subHeader: string;
  title: string;
  subTitle: string;
  image: string;
  link: string;
  publishedDate: Date;
}

export const OFFERS: OFFERIF[] = [
  {
    id: 1,
    subHeader: "From $0.99",
    title: "Breathable",
    subTitle: "Face Mask",
    image:
      "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/",
    publishedDate: new Date(),
  },
  {
    id: 2,
    subHeader: "From $9.99",
    title: "Covid 19 pack",
    subTitle: "Get it now 45% Off",
    image:
      "https://images.pexels.com/photos/5863283/pexels-photo-5863283.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/",
    publishedDate: new Date(),
  },
];
