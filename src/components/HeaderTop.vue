<style>
.header-top {

  font-size: 0.875rem;
  align-items: center;
}
</style>

<template>
    <!-- HEADER TOP -->
    <div class="header-top justify-content-between container-xxl py-2 d-none d-lg-flex" >
        <nav class="nav-pages gap-3 d-flex fw-bolder">
          <a class="nav-link link-thirdly active" href="#">О нас</a>
          <a class="nav-link link-thirdly" href="#">Доставка</a>
          <a class="nav-link link-thirdly" href="#">Оплата</a>
          <a class="nav-link link-thirdly" href="#">Гарантия и возврат</a>
          <a class="nav-link link-thirdly" href="#">Контакты</a>
          <a class="nav-link link-thirdly" href="#">Новости</a>
          <a class="nav-link link-thirdly" href="#">Статьи</a>
        </nav>

        <div class="d-flex align-items-center gap-4">
          <div class="delivery text-thirdly d-none d-xl-block">
            <span class="span fw-lighter">Пункт выдачи: </span>
            <span class="span ">Москва, ул. 3-я Ямского поля, 2к3</span>
          </div>

          <nav class="nav nav-social gap-2">
            <a href="" class="link-thirdly icon icon-telegram-icon i-x1-5"></a>
            <a href="" class="link-thirdly icon icon-vc-icon i-x1-5"></a>
            <a href="" class="link-thirdly icon icon-instagram-icon i-x1-5"></a>
          </nav>
        </div>
    </div>
</template>