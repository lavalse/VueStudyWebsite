<template>
    <div class="footer">
      <div class="line"></div>
      this is footer
    </div>
</template>

<script>
export default {
  name: 'websiteFooter',
  props:['ispc']
} 
</script>


<style lang="scss" scoped>
$footerbg: rgb(245, 245, 245);

.footer {
  margin-top: 50px;
  height: 200px;
  background-color: $footerbg;
}

</style>