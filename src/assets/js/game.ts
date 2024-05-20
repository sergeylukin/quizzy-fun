// import type { Alpine } from 'alpinejs'h
// import Alpine from 'alpinejs'

export default () => ({
  // @ts-ignore
  playerName: Alpine.$persist('').as('player-name'),

  // @ts-ignore
  playerAge: Alpine.$persist(null).as('player-age'),

  // @ts-ignore
  playerTopics: Alpine.$persist([]).as('player-topics'),

  items: ['first', 'second', 'third'],
})
