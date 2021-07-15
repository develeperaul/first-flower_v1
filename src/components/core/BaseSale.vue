<template>
  <q-card
      class="my-card tw-text-white tw-flex tw-justify-between  tw-pt-0 "
      :style="{ background: color }"
  >
    <q-card-section class="tw-p-0 tw-my-5 tw-ml-6 tw-flex-grow">
      
        <div class="tw-mb-3">
          <span class="text-color tw-text-lg tw-font-medium"> {{ text }}</span>
        </div>
        <template>
          <slot></slot>
        </template>
  
    </q-card-section>
     <!-- <q-card-section class="tw-p-0 tw-flex tw-items-end tw-flex-grow-0"> -->
    <q-card-section 
      :style="
          `background-image: url(http://flowers.2apps.ru${img});`"
      class="image-pos"
    >
        <!-- <img
          class="w-10 tw-h-auto tw-max-w-full "
          :src="`http://flowers.2apps.ru${img}`"
          alt=""
        /> -->
        
      </q-card-section>
  </q-card>
  
</template>

<script>
export default {
  // class=" tw-pb-0 tw-flex tw-flex-col tw-justify-end"??
  // name: 'ComponentName',
  props: {
    color: {
      default: "#DDECE5",
      type: String,
      required: false
    },
    text: {
      default: "#fffff",
      type: String,
      required: false
    },
    preview_text: {
      type: String,
      required: false,
      default: 'нет описания'
    },
    img: {
      type: String,
      required: false
    }

  },
  
};
</script>
<style lang="scss" scoped>
  .image-pos{
    
    min-width: 114px;
    min-height: 100%;
    background-repeat:  no-repeat;
    background-position: right bottom;
    background-size: contain;
    margin-left: 7px;
    margin-right: 7px;
    margin-top: 12px;
  }
</style>>


