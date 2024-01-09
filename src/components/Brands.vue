<template>
      <!-- Производители -->
      <div class="brands container-xxl py-3">
        <div class="row py-3">
          <h3 class="my-2">Техника от официальных производителей</h3>
        </div>
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-2">
          <div class="col"  v-for="i in 15" :key="i">
            <img :src="'/public/images/brands/brand_'+i+'.png'" :alt="'Brand #'+i" class="img-fluid w-100">
          </div>
        </div>
      </div>
</template>