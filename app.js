new Vue({
  el: '#vue-app',
  data: {
    name: 'Enrico',
    age: 25,
    x: 0,
    y: 0,
  },
  methods: {
    logName: function() {
      console.log("You entered your name");
    },
    logAge: function(inc) {
      console.log("You entered your age");
    }
  }
});