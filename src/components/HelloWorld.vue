<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Your first Vue files, wooo!'

    }
  },
  methods:{
    greeting: function (){
      return 'heeey cowboy!';
    }
  }
}
</script>


<style>

</style>
