# Compartie

Compartie e um aplicativo mobile criado com Expo para incentivar o compartilhamento entre vizinhos. A proposta do projeto e conectar pessoas de uma mesma comunidade para emprestar, pedir, descobrir e circular itens do dia a dia de forma simples, visual e acolhedora.

## Visao geral

Na versao atual, o app apresenta uma home inicial com foco em descoberta:

- cabecalho de boas-vindas
- busca de itens
- lista de categorias
- secao de itens disponiveis
- secao de pedidos da vizinhanca
- banner de incentivo ao compartilhamento
- barra de navegacao inferior com areas de inicio, explorar, compartilhar, atividades e perfil

Essa estrutura serve como base para evoluir o produto em direcao a uma experiencia de economia colaborativa local.

## Stack utilizada

- Expo `~57.0.17`
- React `19.2.3`
- React Native `0.86.3`
- Expo Router
- TypeScript
- NativeWind
- Lucide React Native

## Estrutura principal

```text
src/
  app/                   rotas do app com Expo Router
  components/home/       componentes da tela inicial
  components/navigation/ componentes de navegacao
  components/ui/         blocos reutilizaveis de interface
assets/
  images/                logos e imagens do projeto
scripts/                 scripts utilitarios
```

## Como executar o projeto

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run start
```

3. Abra no ambiente desejado:

- `npm run android`
- `npm run ios`
- `npm run web`

## Scripts disponiveis

- `npm run start`: inicia o Expo
- `npm run android`: abre o projeto no Android
- `npm run ios`: abre o projeto no iOS
- `npm run web`: abre o projeto na web
- `npm run lint`: executa a verificacao de lint
- `npm run reset-project`: reseta a base inicial do template

## Status atual

O projeto esta em fase inicial de interface e composicao visual. Parte dos componentes ainda usa conteudo placeholder, o que e normal neste momento de estruturacao da experiencia e do design do produto.

## Proximos passos sugeridos

- conectar os componentes a dados reais ou mocks centralizados
- implementar navegacao funcional entre as abas
- criar fluxo de cadastro, perfil e publicacao de itens
- adicionar estados de carregamento, vazio e erro
- incluir testes e validacoes de interface

## Licenca

Este projeto inclui um arquivo [LICENSE](./LICENSE) no repositorio.
