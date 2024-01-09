<style>
.products .product-item-wrapper {
  height: 30rem;
}

.products .product-item-wrapper .product-item-inner .product-image {
  height: 16rem;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-around;
  align-items: center;
  margin: 0rem -1rem 0 -1rem;
}
.products .product-item-wrapper .product-item-inner .product-name {
  font-size: 1.125rem;
}

.products .product-item-inner {
  transition: 0.25s;
  transition-duration: 0.25s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: all;
}

.products .product-item-inner .hidden-block {
  opacity: 0;
  height: 0;
  visibility: hidden;
  transform: translate(0, 10px);
  transition: 0.25s;
}

.products .product-item-inner:hover  {
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 30, 0.10);
}

.products .product-item-inner:hover .hidden-block {
  position: relative;
  opacity: 1;
  height: auto;
  visibility: visible;
  transform: translate(0, 0);
}
.products .product-item-inner:hover .product-cart .btn {
  display: none !important;
}

.products .product-item-inner span.btn.btn-tip {
  position: absolute;
  top: 1rem;
  opacity: 1;
  font-size: 0.875rem !important;
}

.products .swiper {
  width: 100%;
  height: calc(30rem * 2 + 20px);
  margin-left: auto;
  margin-right: auto;
}

.products .swiper-slide {
  height: calc((100% - 20px) / 2) !important;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.products .swiper-slide:hover {
  z-index: 15;
}

</style>

<template>
      <!-- PRODUCTS GRID -->
      <div class="products container-xxl py-6" >
        <div class="row py-3">
          <div class="col-7"><h3 class="my-2">Популярные</h3></div>
          <div class="col-5 text-end">
            <div class="btn-group" role="group">
              <button class="btn btn-outline-secondary swiper-popular-products-prev" aria-disabled="true"><i class="icon icon-arrow-left-2 i-x1-5"></i></button>
              <button class="btn btn-outline-secondary swiper-popular-products-next"><i class="icon icon-arrow-right-2 i-x1-5"></i></button>
            </div>
          </div>
        </div>

        <div class="swiper swiper-popular-products" style="overflow-x: clip !important; overflow-y: visible;">

          <div class="swiper-wrapper row row-cols-2 row-cols-md-2 row-cols-lg-4 g-0">
          
            <!-- Product Item -->
            <div class="col swiper-slide" v-for="i in 15" :key="i">
              <div class="product-item-wrapper bg-white rounded-4">
                <div class="product-item-inner d-flex flex-column gap-4 bg-white p-5 rounded-4">
  
                  <span class="btn btn-tip btn-sm btn-outline-success bg-white disabled rounded-4">Новинка</span>
  
                  <div class="product-image text-center">
                    <img src="/public/images/product/notebook_1.png" class="img-fluid" alt="">
                  </div>
  
                  <div class="product-details d-flex flex-column gap-4">
                    <div class="product-name">Apple MacBook Pro 13 (M1)</div>
  
                    <div class="product-cart d-flex gap-3 align-items-center">
  
                      <a href="#cart" class="btn btn-primary px-3 text-white">
                        <i class="icon icon-iconlylightbag-3 i-x1-2" ></i>
                      </a>
  
                      <span class="product-price fs-4">15 000 ₽</span>
                    </div>
                  </div>
  
                  <div class="hidden-block d-flex flex-column gap-4">
                      <div class="d-grid gap-2">
                        <a href="#cart" class="btn btn-primary text-white rounded-1">
                          <i class="icon icon-iconlylightbag-3 i-x1-2" ></i>
                          <span>В корзину за <span>15 000 ₽</span></span>
                        </a>
      
                        <a href="#cart" class="btn btn-outline-secondary rounded-1">
                          <i class="icon icon-iconlylightbag-3 i-x1-2" ></i>
                          <span>Добавить в избранное</span>
                        </a>
                      </div>
    
                      <p class="delivery- small my-0">
                        <span class="text-primary">29 июля</span> доставит курьер Привет! Store
                      </p>
    
                      <p class="options small text-thirdly my-0">
                        <span class="me-2">Доступные цвета</span>
                        <i class="rounded-circle bg-primary d-inline-block align-middle" style="width: 1rem; height: 1rem;"></i>
                        <i class="rounded-circle bg-secondary d-inline-block align-middle" style="width: 1rem; height: 1rem;"></i>
                        <i class="rounded-circle bg-info d-inline-block align-middle" style="width: 1rem; height: 1rem;"></i>
                      </p>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
</template>