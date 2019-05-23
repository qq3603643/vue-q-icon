# vue-q-icon

# 如何使用
  - 安装
  ```
    npm install vue-q-icon --save-dep
  ```

  - 引入

  ```
    import Vue from 'vue';
    import QIcon from "vue-q-icon";

    Vue.use(QIcon, options?: { size: 20 })
  ```

  - 示例
  ```
    <template>
      <QIcon name="微笑" />
      <QIcon name="撇嘴" />
      <QIcon name="色" />
      <QIcon name="发呆" />

      <!-- etc... -->
    </template>

    <script>
      export default {
        data() {
        },

        mounted() {
        },
      };
    </script>
  ```
