export default function () {
  return {
    name: this.$store.game.playerName,
    age: this.$store.game.playerAge,
    topics: this.$store.game.playerTopics,

    showNameForm() {
      return !this.$store.game.playerName
    },

    showAgeForm() {
      return this.$store.game.playerName && !this.$store.game.playerAge
    },

    showTopics() {
      return this.$store.game.playerName && this.$store.game.playerAge && !this.$store.game.playerTopics.length
    },

    updateName() {
      this.$store.game.playerName = this.name
    },

    updateAge() {
      this.$store.game.playerAge = this.age
    },

    updateTopics() {
      this.$store.game.playerTopics = this.topics
    },
  }
}
