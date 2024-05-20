// import type { Alpine } from 'alpinejs'h
// import Alpine from 'alpinejs'

export default function () {
  return {
    // @ts-ignore
    playerName: Alpine.$persist('').as('player-user'),

    // @ts-ignore
    on: Alpine.$persist(true),
    // playerName: '',

    items: ['first', 'second', 'third'],
  }
}
