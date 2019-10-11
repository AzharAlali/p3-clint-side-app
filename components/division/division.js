const division = (x, y) => { return x / y }

const dividing = new Vue({
  el: '#divide',
  data: {
    guest: 'Azhar',
    number1: 20,
    number2: 5
  },
  computed: {
    ans: function () {
      const i = parseInt(this.number1)
      const j = parseInt(this.number2)
      return `${this.guest}, your division is ${division(i, j)}.`
    }
  }
})