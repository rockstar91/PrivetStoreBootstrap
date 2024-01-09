<style>
/* Header */

.header-desktop {
  min-height: 10.94rem;
  background-color: var(--bs-blue);
  background-image: url('/public/images/header-gradient.svg');
  background-position: right;
  background-repeat: no-repeat;
}

.header-desktop .logo-base-container p {margin: 0}

.header-desktop .nav > a {
  color: var(--bs-white);
}

/* Header Profile */

/*
.header-desktop .nav-profile a:hover {
  background-color: var(--color-gray-100);
}
*/

.header-desktop .nav-profile .favorites .counter {
  margin: 0 !important;
  position: absolute;
  top: -0.31rem;
  left: 7.6rem;
  border-radius: var(--br-81xl);
  background-color: var(--bs-primary);
  width: 1.25rem;
  height: 1.25rem;
  text-align: center;
  padding: 0;
  z-index: 3;
  font-size: 0.75rem;
}

</style>

<template>
        <!-- HEADER DESKTOP -->
        <div class="header-desktop header-body d-none d-md-flex justify-content-center flex-column gap-5">

          <div class="container-xxl d-flex align-items-center justify-content-between gap-3">
            <!-- LOGO CONTAINER -->
            <div class="logo-base-container d-flex align-items-center gap-4">
              <a href="" class="logo-base-link">
                <img src="/public/images/logo-full.svg" alt="" style="width: 11.296rem; height: 3.75rem;" />
              </a>
              <div class="logo-text d-none d-xl-block lh-1 fw-bolder">
                <p class="tip mb-1" style="color: #fff;">Магазин техники</p>
                <p class="delivery text-primary">с доставкой по всей России</p>
              </div>
            </div>

            <!-- SEARCH -->
              <form class="d-flex header-search input-group fs-6 rounded-3 py-2 px-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Поиск по названию или артикулу" aria-label="Search">
                <button class="icon icon-iconlylightsearch px-0 i-x1-2" type="submit"></button>
              </form>

            <!-- PROFILE LINKS -->
            <div class="nav-profile nav d-flex gap-2 position-relative fw-bolder">

              <!-- CART -->

              <div class="cart-wrapper">
                <a href="#cart" class="cart btn text-white" data-bs-toggle="modal" data-bs-target="#cartModal">
                  <i class="icon icon-iconlylightbag-3 i-x1-5" ></i>
                  <span class="dyson">
                    <span class="span">0 </span><span>₽</span>
                  </span>
                </a>

                <!-- Модальное окно -->
                <div class="modal" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="cartModalLabel">Ваша корзина</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                      </div>
                      <div class="modal-body">
                        <p>Товар 1</p>
                        <p>Товар 2</p>
                        <p>Товар 3</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-primary text-white">Сохранить</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- FAVORITES -->
              <a href="#fav" class="favorites btn text-white">
                <i class="icon icon-iconlylightheart i-x1-5"></i>
                <span class="counter position-absolute">12</span>
              </a>

              <div class="profile-wrapper position-relative">
                  <!-- PROFILE DROPDOWN -->
                  <a href="#profile" class="profile btn text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="icon icon-iconlylightprofile i-x1-5"></i>
                    <span class="">Константин П.</span>
                    <!-- <i class="icon icon-arrow-down-2 text-primary i-x1"></i>-->
                  </a>
                  <ul class="dropdown-menu w-100 mt-1">
                    <li><a class="dropdown-item pe-5" href="#">Мои заказы</a></li>
                    <li><a class="dropdown-item" href="#">Уведомления</a></li>
                    <li><a class="dropdown-item" href="#">Поддержка</a></li>
                    <li><a class="dropdown-item" href="#">Выйти</a></li>
                  </ul>
              </div>
                
            </div>

          </div>


          <div class="container-xxl d-flex justify-content-between">

            <nav class="nav navbar navbar-expand py-0 bg-transparent d-flex align-items-center gap-3 fw-bolder" data-bs-theme="light">

              <!-- CATALOG BUTTON -->
              <a class="btn btn-lg btn-primary catalog-btn text-white fs-6 fw-bolder d-flex align-items-center gap-2 me-4" href="#">
                <i class="icon icon-iconlylightcategory i-x1-5"></i>
                Каталог
              </a>
    
              <ul class="navbar-nav gap-3 me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a class="dropdown-toggle link-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Apple </a>
                  <ul class="dropdown-menu">
                    <li class="dropdown-submenu dropend">
                      <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Action 1<span
                        class="float-end custom-toggle-arrow">&#187</span></a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action 2</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              
                <li class="nav-item dropdown">
                  <a class="dropdown-toggle link-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Samsung</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action 2</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <a class="dropdown-toggle link-white" href="#">Xiaomi</a>
                <a class="dropdown-toggle link-white" href="#">DJi</a>
                <a class="link-white" href="#">Аксессуары</a>
                <a class="link-white" href="#">Умный дом</a>
              </ul>
            </nav>

            <div class="d-flex align-items-center gap-4 text-white">
              <div class=" fw-lighter">Дроны DJI</div>
              <div class=" fw-lighter">PlayStation 5</div>
              <div class=" fw-lighter">Dyson</div>
            </div>

          </div>

        </div>
</template>