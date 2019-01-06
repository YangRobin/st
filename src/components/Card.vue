<template>
  <div class="card" :style="{width:size}">
    <div class="card-header">
      <h3>{{ title || 'title'}}</h3>
    </div>
    <div class="card-body">
      <slot name="body">
        <p>card body</p>
      </slot>
    </div>
    <div class="card-footer">
      <span class="api">API说明</span>
      <slot name="footer">footer</slot>
    </div>
    <div class="card-code">
      <slot name="code">code</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  props: ["title", "size"]
};
</script>
<style lang="scss" scoped>
.card {
  .paddings {
    padding: 15px 10px;
  }
  background-color: #ffffff;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
  margin: 10px 0;
  .card-header {
    border-left: 2px solid #2fb8f5;
    border-bottom: 1px solid #f1f1f1;
    @extend .paddings;
  }
  .card-body {
    border-bottom: 1px solid #f1f1f1;
    @extend .paddings;
  }
  .card-footer {
    position: relative;
    border-bottom: 1px solid #f1f1f1;
    @extend .paddings;
    .api {
      position: absolute;
      font-size: 10px;
      top: -8px;
      background: white;
      padding: 0 10px;
      color: #949494;
    }
  }
  .card-code {
    @extend .paddings;
  }
}
</style>

