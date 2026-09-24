export type NeighborRequest = {
  id: string;
  name: string;
  avatar?: string;
  itemNeeded: string;
  description: string;
  location: string;
};

export const neighborRequests: NeighborRequest[] = [
  {
    id: "1",
    name: "Mariana",
    itemNeeded: "Furadeira",
    description: "Preciso para instalar uma prateleira amanhã",
    location: "Torre B",
  },
  {
    id: "2",
    name: "Rafael",
    itemNeeded: "Cadeira de escritório",
    description: "Preciso para trabalhar durante a semana",
    location: "Torre A",
  },
  {
    id: "3",
    name: "Juliana",
    itemNeeded: "Caixa de ferramentas",
    description: "Preciso para pequenos reparos em casa",
    location: "Torre C",
  },
];
