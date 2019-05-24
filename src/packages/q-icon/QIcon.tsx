/**
 * @description qq icon
 * @author   xjc
 */

import "./QIcon.scss";

import Vue, { CreateElement } from "vue";
import {
  Component,
  Prop,
} from "vue-property-decorator";

interface Size {
  width: number | string,
  height: number | string,
}

interface QIconOptions {
  size?: number | string | Size,
}

const config: QIconOptions = {
  size: {
    width: "20px",
    height: "20px",
  },
};
const mergeConfig = (options: QIconOptions) => {
  const formatVal = (val: number | string) => {
    if (typeof val === "number") {
      val = `${val}px`;
    }

    if (typeof val === "string") {
      if (/^\d+$/.test(val)) {
        val = `${val}px`;
      } else if (/^\d+(px|em|rem|vw|vh)$/ig.test(val)) {
        //
      } else {
        val = `${val.match(/\d+/) ? val.match(/\d+/)![0] : ""}px`;
      }

    }

    return val;
  };

  const { size } = options;
  if (["", undefined, "undefined", null, "null"].includes(size as string)) {
    return;
  }

  if (["number", "string"].includes(typeof size)) {
    Object.assign(config, {
      size: {
        width: formatVal(size as string | number),
        height: formatVal(size as string | number),
      }
    });
  }

  if (typeof size === "object") {
    const { width, height } = size;
    Object.assign(config, {
      size: {
        width: formatVal(width),
        height: formatVal(height),
      }
    });
  }
};

export {
  mergeConfig,
  QIconOptions,
};

@Component({})
export default class QIcon extends Vue {
  /************************************* Props *************************************/
  @Prop({
    type: String,
    required: true,
  })
  name!: string;

  @Prop({
    type: String,
    default: "",
  })
  src!: string;

  /************************************* Data *************************************/
  zhKeys: string[] = [
    "微笑", "撇嘴", "色", "发呆", "得意", "流泪", "害羞", "闭嘴", "睡", "大哭", "尴尬", "发怒", "调皮", "呲牙", "惊讶", "难过", "酷", "冷汗", "抓狂", "吐", "偷笑", "愉快", "白眼", "傲慢", "饥饿", "困", "惊恐", "流汗", "憨笑", "大兵", "奋斗", "咒骂", "疑问", "嘘", "晕", "折磨", "衰", "骷髅", "敲打", "再见", "擦汗", "抠鼻", "鼓掌", "糗大了", "坏笑", "左哼哼", "右哼哼", "哈欠", "鄙视", "委屈", "快哭了", "阴险", "亲亲", "吓", "可怜", "菜刀", "西瓜", "啤酒", "篮球", "乒乓", "咖啡", "饭", "猪头", "玫瑰", "凋谢", "示爱", "爱心", "心碎", "蛋糕", "闪电", "炸弹", "刀", "足球", "瓢虫", "便便", "月亮", "太阳", "礼物", "拥抱", "强", "弱", "握手", "胜利", "抱拳", "勾引", "拳头", "差劲", "爱你", "NO", "OK", "爱情", "飞吻", "跳跳", "发抖", "怄火", "转圈", "磕头", "回头", "跳绳", "挥手", "激动", "街舞", "献吻", "左太极", "右太极",
  ];

  baseURI: string = "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/";

  get qSrc() {
    const vm = this;

    if (vm.src) {
      return vm.src;
    }

    let index = -1;
    vm.name.replace(/[\u4E00-\u9FA5NOK]{1,3}/i, (name?: string) => {
      if (!name) {
        return "";
      }

      index = vm.zhKeys.indexOf(name);
      return "";
    });

    return index === -1 ? "" : `${vm.baseURI}/${index}.gif`;
  }

  get style() {
    return config.size;
  }

  /************************************* Methods *************************************/
  mounted() {
  }

  render(h: CreateElement) {
    const vm = this;

    return (
      <i class="q-icon" style={vm.style}>
        <img src={vm.qSrc} />
      </i>
    );
  }
}
