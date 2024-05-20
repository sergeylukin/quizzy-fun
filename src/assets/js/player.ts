const initIcon = `<svg class="w-7 h-7 fill-current"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20
4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20
8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666
6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3
3h4v2H7z"></path></svg>`
const sendingIcon = `<span class="loading loading-spinner"></span>`
const sentIcon = `<svg class="w-7 h-7 fill-current"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.486
2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411
0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999
13.587 7.7 11.292l-1.412 1.416 3.713 3.705
6.706-6.706-1.414-1.414z"></path></svg>`
const errorIcon = `<svg class="w-7 h-7 fill-current"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20
4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20
8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666
6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3
3h4v2H7z"></path></svg>`

export default function () {
  return {
    status: 'init',
    name: this.$persist('').as('asdasdasd'),
    // name: 'kukuku',

    handleSubmit() {
      // this.name = 'ggg'
      this.$store.game.playerName = this.name
      console.log('zzz', this.name)
      // Alpine.store('game').playerName = this.name
      // const form = this.$root
      // this.status = 'validate'
      //
      // if (form.checkValidity()) {
      //   this.status = 'sending'
      //
      //   this.status = 'sent'
      //   setTimeout(() => (this.status = 'init'), 5000)
      //   form.reset()
      // }
    },

    get formValidate() {
      switch (this.status) {
        case 'validate':
          return this.status
        default:
          return ''
      }
    },

    get submitButtonText() {
      switch (this.status) {
        case 'sending':
          return `Отправляется ${sendingIcon}`
        case 'sent':
          return `Отправлено
                                                ${sentIcon}`
        case 'error':
          return
          ;`Ошибка
                    ${errorIcon}`
        default:
          return `Отправить ${initIcon}`
      }
    },

    get submitButtonColor() {
      switch (this.status) {
        case 'sending':
          return '!btn-accent !bg-accent'
        case 'sent':
          return '!btn-secondary !bg-secondary'
        case 'error':
          return '!btn-error !bg-error'
        default:
          return 'btn-secondary'
      }
    },

    get submitButtonDisable() {
      if (!this.name) return true
      switch (this.status) {
        case 'sending':
          return true
        case 'sent':
          return true
        case 'error':
          return true
        default:
          return false
      }
    },
  }
}
