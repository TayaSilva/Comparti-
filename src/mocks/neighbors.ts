export type NeighborRequest = {
  id: string;
  name: string;
  avatar?: string;
  itemNeeded: string;
  location: string;
};

export const neighborRequests: NeighborRequest[] = [
  {
    id: "1",
    name: "Mariana",
    itemNeeded: "Furadeira",
    location: "Torre B",
  },
  {
    id: "2",
    name: "Rafael",
    itemNeeded: "Cadeira de escritório",
    location: "Torre A",
  },
  {
    id: "3",
    name: "Juliana",
    itemNeeded: "Caixa de ferramentas",
    location: "Torre C",
  },
];
