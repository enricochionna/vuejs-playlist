new Vue({
  el: '#vue-app',
  data: {
    name: 'Enrico',
    job: 'Ninja'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});