new Vue({
  el: '#vue-app',
  data: {
    name: 'Enrico',
    job: 'Ninja',
    website: 'http://wwww.thenetninja.co.uk',
    websiteTag: '<a href="http://wwww.thenetninja.co.uk">The Net Ninja Website</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});