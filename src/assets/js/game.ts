// @ts-nocheck
//
export default () => ({
  playerName: Alpine.$persist('').as('player-name'),

  playerAge: Alpine.$persist(null).as('player-age'),

  playerTopics: Alpine.$persist([]).as('player-topics'),

  playerMaxReachedLevel: Alpine.$persist(1).as('player-max-reached-level'),

  currentLevel: Alpine.$persist(null).as('current-level'),

  currentQuestion: Alpine.$persist('').as('current-question'),

  questions: Alpine.$persist({}).as('questions'),

  selectedAnswers: Alpine.$persist({}).as('answers'),

  get currentView() {
    console.log('level', this.currentLevel)
    if (this.isNewPlayer()) return 'onboarding'
    if (!this.currentLevel) return 'levels'
    if (!this.currentQuestion) return 'questions'
    return 'quiz'
  },

  setAnswer(question, answer) {
    this.selectedAnswers = { ...this.selectedAnswers, ...{ [question.id]: answer } }
  },

  isNewPlayer() {
    return !this.playerName || !this.playerAge || !this.playerTopics.length
  },

  addQuestion(question) {
    this.questions = { ...this.questions, ...{ [question.id]: question } }
    console.log('ADDING ', question)
  },

  getQuestion(id) {
    return this.questions[id]
  },

  getSelectedAnswer(questionId) {
    return this.selectedAnswers.hasOwnProperty(questionId) ? this.selectedAnswers[questionId] : null
  },

  resetQuestion() {
    this.currentQuestion = null
  },
})
