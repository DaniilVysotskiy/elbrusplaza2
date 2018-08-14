import Vue from 'vue';
import DatePicker from 'vue2-datepicker';

const datePicker = {
  install(Vue, options) {
    Vue.component('date-picker', DatePicker);
  }
};

Vue.use(datePicker);
export default datePicker;