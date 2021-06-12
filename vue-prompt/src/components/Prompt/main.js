// 调用方式
// this.$prompt('这里是语句？', {
//     onOk() {

//     },
//     onCancel () {

//     }
// });

import Vue from 'vue';
import Prompt from './index.vue';

const PromptConstructor = Vue.extend(Prompt);
const el = document.createElement('div');

export default {
    install() {
        Vue.prototype.$prompt = function (message, { onOk, onCancel }) {
            const promptNode = new PromptConstructor({
                propsData: {
                    message,
                    onOk: () => {
                        promptNode.$el.remove();
                        onOk();
                    },
                    onCancel: () => {
                        promptNode.$el.remove();
                        onCancel();
                    },
                }
            });
            document.body.append(el);
            promptNode.$mount(el);
        }
    }
}