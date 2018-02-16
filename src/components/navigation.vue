<template>
  <nav class="Navigation nav-extended">
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <router-link class="tab" :to="{path: 'manufacturer'}" active-class="active">Fabrication</router-link>
        <router-link class="tab" :to="{path: 'distribution'}" active-class="active">Distribution</router-link>
        <router-link class="tab" :to="{path: 'storages'}" active-class="active">Stockage</router-link>
        <a class="tab">Succes</a>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scoped>
  .Navigation {
    position: relative;
    z-index: 2;
  }
  .tabs .tab {
    padding: 0 10px;  
  }
</style>

      
    