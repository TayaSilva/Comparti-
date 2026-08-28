export type CategoryItem = {
  icon: number;
  id: string;
  title: string;
};

const furadeiraIcon = require("../../assets/images/icons/furadeira.png");
const cozinhaIcon = require("../../assets/images/icons/cozinha.png");
const festaIcon = require("../../assets/images/icons/festa.png");
const infantilIcon = require("../../assets/images/icons/infantil.png");
const limpezaIcon = require("../../assets/images/icons/limpeza.png");
const petsIcon = require("../../assets/images/icons/pets.png");
const salaIcon = require("../../assets/images/icons/sala.png");
const viagemIcon = require("../../assets/images/icons/viagem.png");

export const categories: CategoryItem[] = [
  { id: "ferramentas", title: "Ferramentas", icon: furadeiraIcon },
  { id: "casa", title: "Casa", icon: salaIcon },
  { id: "limpeza", title: "Limpeza", icon: limpezaIcon },
  { id: "festas", title: "Festas", icon: festaIcon },
  { id: "cozinha", title: "Cozinha", icon: cozinhaIcon },
  { id: "viagem", title: "Viagem", icon: viagemIcon },
  { id: "pets", title: "Pets", icon: petsIcon },
  { id: "infantil", title: "Infantil", icon: infantilIcon },
];
