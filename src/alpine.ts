import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'
import persist from '@alpinejs/persist'
// import common from "./common";
import player from './assets/js/player'
import game from './assets/js/game'

export default (Alpine: Alpine) => {
  document.addEventListener('alpine:init', () => {
    window.Alpine = Alpine
    Alpine.plugin(intersect)

    // if (!Alpine.persist){
    Alpine.plugin(persist)
    // }
    // Alpine.plugin(persist)

    // Alpine.data("common", common);
    console.log(player, 'PLAAAA')
    Alpine.data('player', player)
    Alpine.store('game', game)
    // Alpine.start()
  })
}
