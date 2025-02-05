export default function () {
  return {
    question: this.$store.game.getQuestion(this.$store.game.currentQuestion),

    init() {
      console.log('setting to ', this.$store.game.getQuestion(this.$store.game.currentQuestion))
      this.question = this.$store.game.getQuestion(this.$store.game.currentQuestion)
    },

    get title() {
      this.question = this.$store.game.getQuestion(this.$store.game.currentQuestion)
      console.log('title', this.question)
      return this.question.data.title
    },

    get answers() {
      this.question = this.$store.game.getQuestion(this.$store.game.currentQuestion)
      return this.question.data.answers
    },

    get isAnswered() {
      return !!this.$store.game.getSelectedAnswer(this.$store.game.currentQuestion)
    },

    get selectedAnswer() {
      return this.$store.game.getSelectedAnswer(this.$store.game.currentQuestion)
    },

    setAnswer(answer) {
      this.$store.game.setAnswer(this.question, answer)
    },
  }
}
