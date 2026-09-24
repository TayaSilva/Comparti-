export type AvailableItem = {
  id: string;
  title: string;
  image?: number;
  color?: string;
  badgeTextColor?: string;
  description: string;
  isFree: boolean;
  badgeType: "loan" | "paid" | "donation";
  location: string;
  ownerName: string;
};

const drillCardImage = require("../../assets/images/item-drill-card.png");
const wapImage = require("../../assets/images/imagens/wap.png");
const livrosImage = require("../../assets/images/imagens/livros.png");

export const availableItems: AvailableItem[] = [
  {
    id: "1",
    title: "Furadeira Bosch",
    image: drillCardImage,
    color: "#DBEAFE",
    badgeTextColor: "#FFFFFF",
    description: "Empréstimo grátis",
    isFree: true,
    badgeType: "loan",
    location: "Torre B",
    ownerName: "Mariana",
  },
  {
    id: "2",
    title: "Extratora WAP",
    image: wapImage,
    color: "#FEF3C7",
    badgeTextColor: "#FFFFFF",
    description: "R$ 20/dia",
    isFree: false,
    badgeType: "paid",
    location: "Torre A",
    ownerName: "Carlos",
  },
  {
    id: "3",
    title: "Kit de livros infantis",
    image: livrosImage,
    color: "#D1FAE5",
    badgeTextColor: "#FFFFFF",
    description: "Doação",
    isFree: false,
    badgeType: "donation",
    location: "Torre C",
    ownerName: "Ana",
  },
];
