import { createApp } from 'vue'
import App from './App.vue'
import { Button, Switch } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(Button).use(Switch).mount('#app')
