export type AvailableItem = {
  id: string;
  title: string;
  image?: number;
  color?: string;
  description: string;
  isFree: boolean;
  location: string;
  ownerName: string;
};

export const availableItems: AvailableItem[] = [
  {
    id: "1",
    title: "Furadeira Bosch",
    color: "#DBEAFE",
    description: "Empréstimo grátis",
    isFree: true,
    location: "Torre B",
    ownerName: "Mariana",
  },
  {
    id: "2",
    title: "Extratora WAP",
    color: "#FEF3C7",
    description: "R$ 20/dia",
    isFree: false,
    location: "Torre A",
    ownerName: "Carlos",
  },
  {
    id: "3",
    title: "Kit de livros infantis",
    color: "#D1FAE5",
    description: "Doação",
    isFree: true,
    location: "Torre C",
    ownerName: "Ana",
  },
];
