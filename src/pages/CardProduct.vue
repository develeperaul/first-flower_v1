<template>
  <q-page >
      
    <NamePage text="Букет из 21 розы"/>
    <q-carousel

      v-model="slide"
      swipeable
      
      infinite
      transition-prev="slide-right"
      transition-next="slide-left" 
      
      animated
      height="335px"
      ref="carousel"
      class="tw--mx-3 "  
    >
      <q-carousel-slide name="style" class="tw-p-0 " ref="slide" img-src="../assets/image.png">
        
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="tw-p-0" img-src="../assets/image.png">
        
      </q-carousel-slide>
      <q-carousel-slide name="map" class="tw-p-0" img-src="../assets/flower.jpg">
       
      </q-carousel-slide>
    </q-carousel>
    <BorderLine border="t" class="tw--mx-3 "/>
  

    <div class="tw-py-9">
      <div class="tw-mb-5 tw-font-semibold tw-text-xl">
        <span class="">Состав</span>
      </div>
      
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-text-sm">
        <span >Кустовая роза</span>
        <span>51шт</span>
      </div>
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-3.5">
        <span>Крафт</span>
        <span>1шт</span>
      </div>
    </div>
    
    <BorderLine border="t" class="tw--mx-3 "/>
    <div class="tw-flex tw-justify-between tw-items-center tw-pt-2.5 tw-pb-5">
      <span class="tw-text-2xl tw-font-bold">2790руб</span>
      <BaseButton text="Купить" class="tw-px-8 tw-py-1"/>
    </div>
  </q-page>
</template>

<script>


export default {
   data () {
    return {
      controlType: 'flat',
      controlTypeOptions: [
        { value: 'regular', label: 'regular' },
        { value: 'unelevated', label: 'unelevated' },
        { value: 'flat', label: 'flat (default)' },
        { value: 'outline', label: 'outline' },
        { value: 'push', label: 'push' }
      ],

      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  
  beforeUpdate(){
    const el = getComputedStyle(this.$refs.carousel.$el)
    
    
    //console.log(this.$refs.slide)
    console.log(this.$refs.carousel.$el.getComputedStyle)
    this.$nextTick(()=>{
        console.log(this.$refs.carousel.$el.style.height = '  ')
      })
    
  },
  updated(){
    
    // console.log('updated')
    // console.log(this.$refs.carousel.$el.style.height)
    // console.log(this.$refs.carousel.$el)
    // this.$nextTick(()=>{
      
    
    
  }

};
</script>
