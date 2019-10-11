const multiply = (x, y) => { return x * y }

const multiplier = new Vue({
  el: '#multiplier',
  data: {
    guest: 'Azhar',
    numberOne: 30,
    numberTwo: 6
  },
  computed: {
    answer: function () {
      const i = parseInt(this.numberOne)
      const j = parseInt(this.numberTwo)
      return `${this.guest}, your multiplication is ${multiply(i, j)}.`
    }
  }
})