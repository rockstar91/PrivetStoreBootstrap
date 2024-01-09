<template>
    <!-- Скидки и акции (слайдер) -->
    <div class="specials container-xxl py-3">
        <div class="row py-3">
            <div class="col-7"><h3 class="my-2">Скидки и акции</h3></div>
            <div class="col-5 text-end">
                <div class="btn-group" role="group">
                    <button class="btn btn-outline-secondary" aria-disabled="true"><i class="icon icon-arrow-left-2 i-x1-5"></i></button>
                    <button class="btn btn-outline-secondary"><i class="icon icon-arrow-right-2 i-x1-5"></i></button>
                </div>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
            <div class="col" v-for="i in 3" :key="i">
                <a href="#special" class="link-shadow"><img :src="'/public/images/special_'+i+'.png'" alt="" class="img-fluid"></a>
            </div>
        </div>
    </div>
</template>