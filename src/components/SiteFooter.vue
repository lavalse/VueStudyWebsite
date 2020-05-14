<template>
    <div class="footer">
      this is footer
    </div>
</template>

<script>
export default {
  name: 'websiteFooter',
  props:['ispc']
} 
</script>


<style lang="scss">
$footerbg: rgba(120,120,120,1);

.footer {
  margin-top: 50px;
  height: 200px;
  background-color: $footerbg;
}

</style>