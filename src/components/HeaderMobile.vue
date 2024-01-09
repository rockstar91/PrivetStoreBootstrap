<style>
/* Header Mobile */
.header-mobile .navbar {
  background-color: var(--bs-blue);
}

.header-mobile .nav-profile a {
  color: #fff !important;
  font-size: 0.875rem;
  font-weight: 400;
}
.header-mobile .nav-profile i.icon {
  display: block;
  margin: 0 auto;
}
</style>
<template>
      <div class="header-mobile d-lg-none mb-7">
        <nav class="navbar navbar-expand-md navbar-dark bg py-3">

          <div class="container-xxl gap-4">
            <a class="navbar-brand m-0" href="#">
              <img src="/public/images/logo-icon.svg" style="width: 2.8125rem; height: 2.8125rem;" alt="" />
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
              <span class="navbar-toggler-icon"></span>
            </button>
            
    
            <div class="collapse navbar-collapse gap-4" id="navbarSupportedContent">

              <hr class="d-md-none text-white-50">

              <!-- CATALOG BUTTON -->
              <a class="btn btn-primary text-white fs-6" href="#catalog">
                <i class="icon icon-iconlylightcategory"></i>
                Каталог
              </a>

              <hr class="d-md-none text-white-50">
      
              <!-- SEARCH -->
              <form class="d-flex header-search input-group fs-6 rounded-3 py-2 px-3" style="background: rgba(255, 255, 255, 0.20); border: none;" role="search">
                <input class="form-control me-2" type="search" placeholder="Поиск по названию или артикулу" aria-label="Search">
                <button class="icon icon-iconlylightsearch px-0 i-x1-5" type="submit"></button>
              </form>

              <hr class="d-md-none text-white-50">

              <nav class="nav nav-profile gap-3">
                <a href="" class="link-thirdly">
                  <i class="icon icon-iconlylightbag-3 i-x1-5"></i>
                  Корзина
                </a>
                <a href="" class="link-thirdly">
                  <i class="icon icon-iconlylightheart i-x1-5"></i>
                  Избранное
                </a>
                <a href="#profile" class="link-thirdly">
                  <i class="icon icon-iconlylightprofile i-x1-5"></i>
                  Профиль
                </a>
              </nav>

              <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-md-none">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Главная</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Ссылка</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Выпадающий список</a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Действие</a></li>
                    <li><a class="dropdown-item" href="#">Другое действие</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                  </ul>
                </li>
              </ul>
              
              
            </div>
    
          </div>
        </nav>
      </div>
</template>