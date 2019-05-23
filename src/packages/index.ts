import { VueConstructor } from "vue/types/vue";
import QIcon, { mergeConfig, QIconOptions } from "./q-icon/QIcon";

export {
  QIcon,
  QIconOptions,
};

export default function install(Vue: VueConstructor, options?: QIconOptions) {
  mergeConfig(options = {});

  Vue.component("QIcon", QIcon);
}
