<template>
  <client-only>
    <VueEditor v-model="inputV" :editorToolbar="customToolbar" />
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      customToolbar: [
      [{ header: [false, 2, 3, 4, 5, 6] }],
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      [{ align: '' }, { align: 'center' }, { align: 'right' }],
      ['code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ['link', 'image'],
      ['clean'], // remove formatting button
    ],
    }
  },
  computed: {
    inputV: {
      get() {
        return this.$store.state.primary.inputV
      },
      set(value) {
        this.$store.commit('primary/add',{key:'inputV',value})
      },
    },
  },
}
</script>
<style lang="scss">
.theme--dark.v-application {
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow .ql-toolbar .ql-picker-item,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  .ql-snow .ql-toolbar .ql-picker-label,
  .ql-snow .ql-toolbar button.ql-active,
  .ql-snow .ql-toolbar button:focus,
  .ql-snow .ql-toolbar button,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow.ql-toolbar .ql-picker-item,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .ql-snow.ql-toolbar .ql-picker-label,
  .ql-snow.ql-toolbar button.ql-active,
  .ql-snow.ql-toolbar button:focus,
  .ql-snow.ql-toolbar button {
    color: #fff;
  }
  .quillWrapper .ql-snow .ql-stroke {
    stroke: #fff;
  }
  .ql-snow .ql-fill,
  .ql-snow .ql-stroke.ql-fill {
    fill: #fff;
  }
  .ql-snow .ql-picker-options {
    background-color: var(--v-background-base);
  }
  .ql-active {
    color: var(--v-primary-base) !important;
  }
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar button:focus .ql-stroke,
  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar button:focus .ql-stroke,
  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke-miter {
    stroke: var(--v-primary-base);
  }
}

.ql-align-right {
  text-align: right;
}
.ql-align-center {
  text-align: center;
}
pre.ql-syntax {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
  white-space: pre-wrap;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>
