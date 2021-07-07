import  Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';


import { extend, localize } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru';
import * as rules from 'vee-validate/dist/rules';

localize('ru', ru);

const needRules = [
  'required',
  'ext',
  'size',
  'min',
  'length',
];

needRules.forEach((rule) => {
  extend(rule, rules[rule]);
});


Vue.component('MyComponent', require('src/components/core/MyComponent.vue').default)
  Vue.component('BaseButton', require('src/components/core/BaseButton.vue').default)
  Vue.component('BaseGroupButton', require('src/components/core/BaseGroupButton.vue').default)
  Vue.component('BorderLine', require('src/components/core/BorderLine.vue').default)
  Vue.component('BaseItem', require('src/components/core/BaseItem.vue').default)
  Vue.component('BaseItem', require('src/components/core/BaseItem.vue').default)
  Vue.component('BaseItemDrawer', require('src/components/core/BaseItemDrawer.vue').default)
  Vue.component('NamePage', require('src/components/core/NamePage.vue').default)
  Vue.component('BaseSale', require('src/components/core/BaseSale.vue').default)

  Vue.component('BaseInput', require('src/components/core/BaseInput.vue').default)
  Vue.component('Input', require('src/components/core/Input.vue').default)
  Vue.component('PhoneInput', require('src/components/core/PhoneInput.vue').default)
  Vue.component('DateInput', require('src/components/core/DateInput.vue').default)
  
  

  
Vue.component('Icon', require('src/components/icons/Icon.vue').default)

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

