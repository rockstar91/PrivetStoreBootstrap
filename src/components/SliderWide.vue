<style>
.banner-slider  .banner-slider-inner {
    min-height: 500px;
    background-color: var(--bs-blue);
    background-image: url(/public/images/slider-background.svg);
    background-position: 0%;
    background-repeat: no-repeat;
    background-position: 0%;
}

.banner-slider-thumbs .swiper-slide {
    min-width: 5.5rem;
    padding-top: .625rem;
}

/* Navigation Item Background */
.banner-slider-thumbs .swiper-slide span {
    transition: background-image .3s ease-in-out;
    transition: background-color .1s ease-in-out;
    width: 5rem;
    height: 5rem;
    padding: .625rem;
    border-radius: 50%;
    background: #fff;
    display: block;
    margin-bottom: 10px;
}

/* Active Navigation Item */
.banner-slider-thumbs .swiper-slide.swiper-slide-thumb-active {
    font-weight: bolder;
    position: relative;
 }

 .banner-slider-thumbs .swiper-slide.swiper-slide-thumb-active a { 
    z-index: 10;
 }

.banner-slider-thumbs .swiper-slide.swiper-slide-thumb-active span {
    background-color: var(--bs-blue);
    background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2281%22%20height%3D%2280%22%20viewBox%3D%220%200%2081%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20id%3D%22Vector%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M86.8681%2044.7287C86.7763%2048.6763%2084.1151%2053.1344%2074.1034%2057.401C63.2475%2062.0324%2057.5029%2064.266%2046.6378%2065.6062C55.0436%2067.9309%2065.9087%2066.5178%2076.1865%2065.6062C77.5942%2065.5766%2078.9812%2065.946%2080.1854%2066.6709C81.3896%2067.3958%2082.3611%2068.4463%2082.9864%2069.6996C84.8217%2073.4557%2083.1332%2078.16%2078.756%2080.0928C74.966%2081.7702%2067.2301%2082.0255%2063.1557%2081.9981C55.1904%2081.9981%2036.3325%2081.9981%2020.6221%2081.9981C14.1098%2081.9812%207.86994%2079.3999%203.27022%2074.8199C-1.3295%2070.24%20-3.9138%2064.035%20-3.9162%2057.5651C-3.91621%2040.9543%20-3.91621%2020.5874%20-3.91621%2012.4735C-3.91621%2011.343%20-4.00797%207.16751%20-3.52161%205.70882C-3.01731%204.18282%20-2.06751%202.84035%20-0.793046%201.85215C0.481419%200.863961%202.02295%200.274729%203.63545%200.159393C5.24796%200.0440574%206.85855%200.407824%208.26236%201.20445C9.66617%202.00108%2010.7997%203.19456%2011.5189%204.63304C12.721%207.03988%2013.1064%2014.1145%2013.1707%2018.7276C13.3083%2028.519%2012.3815%2032.7766%2012.3815%2032.7766C21.347%2023.6598%2031.5147%209.38289%2035.4331%20-1.80341C36.7821%20-5.64158%2039.2965%20-7.81139%2044.0133%20-7.99372C48.7301%20-8.17606%2051.8777%20-4.34701%2052.6668%20-1.78519C53.2403%200.0951818%2053.1726%202.1111%2052.4741%203.94928C51.8501%205.65412%2043.6554%2023.7601%2035.0386%2032.7948C49.6294%2023.4866%2057.7415%2014.2786%2067.1567%200.156691C70.598%20-4.9943%2077.6273%20-6.69001%2082.8855%20-2.62392C86.345%200.0473012%2088.0427%204.38687%2086.5102%2010.6319C85.8587%2013.3213%2083.124%2017.6153%2080.472%2020.5145C71.4789%2030.3606%2054.5848%2042.331%2040.6822%2049.205C54.0617%2047.0717%2062.027%2043.1971%2073.1032%2037.0432C74.4815%2036.2029%2076.0508%2035.7215%2077.666%2035.6434C79.2812%2035.5653%2080.8901%2035.8931%2082.344%2036.5965C83.8023%2037.3799%2085.0037%2038.5625%2085.8056%2040.0039C86.6076%2041.4454%2086.9763%2043.0852%2086.8681%2044.7287Z%22%20fill%3D%22url%28%23paint0_radial_84_1501%29%22%2F%3E%0A%3Cdefs%3E%0A%3CradialGradient%20id%3D%22paint0_radial_84_1501%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate%2823.7338%2049.8149%29%20rotate%28-11.4371%29%20scale%2864.6264%2063.9445%29%22%3E%0A%3Cstop%20offset%3D%220.129686%22%20stop-color%3D%22%2300C395%22%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2300C395%22%2F%3E%0A%3C%2FradialGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E');
    background-size: 100%;
}
.banner-slider-thumbs .swiper-slide.swiper-slide-thumb-active:after {
    content: '';
    display: block;
    width: 0.625rem;
    height: 0.625rem;
    background: var(--bs-blue);
    border-radius: 50%;
}

/* Progressbar Cyrcle */
.banner-slider-thumbs .swiper-slide progress-ring {
    display: none;
    z-index: 5;
}

.banner-slider-thumbs .swiper-slide.swiper-slide-thumb-active progress-ring {
    display: block;
    position: absolute;
    top: 0px;
}
</style>

<template>
    <div class="banner-slider container-xxl">

        <!-- Slider main container -->
        <div class="banner-slider-thumbs swiper py-5">

            <!-- Additional required wrapper -->
            <ul class="nav swiper-wrapper d-flex flex-nowrap">
                <li class="swiper-slide d-flex flex-column align-items-center gap-3" v-for="i in 15" :key="i">
                    <a href="#" class="link-secondary text-center">
                    <span class="d-flex justify-content-center">
                        <img :src="'/public/images/category/'+rand()+'.png'" class="img-fluid" alt="" loading="lazy" />
                    </span>
                    Slide {{i}}
                    </a>
                </li>
            </ul>
        </div>

        <!-- Slider main container -->
        <div class="banner-slider-slides swiper">

            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                
                <!-- Slides -->
                <div v-for="i in 15" :key="i" class="swiper-slide banner-slider-inner rounded-4 d-flex align-items-center justify-content-center gap-4 text-white">
                <div class="ps-7 d-flex flex-column justify-content-center gap-4 flex-grow-1 w-50">

                    <div class="empty" style="height: 5rem;"></div>

                    <h1 style="font-size: 4.5rem; font-weight: 900; line-height: 110%;">Mini 3 Pro #{{i}}</h1>
                    <p>Миниатюрный и мощный дрон, который {{i}}<br/>
                    отлично подойдет даже начинающим пилотам</p>


                    <div class="d-flex gap-2 ">
                        <a href="#cart" class="btn btn-primary px-3 text-white">
                            <i class="icon icon-iconlylightbag-3 i-x1-2" ></i>
                            В корзину
                        </a>
                        <a href="#cart" class="btn btn-outline-secondary px-3 text-white">
                            <i class="icon icon-iconlylightbag-3 i-x1-2" ></i>
                            Подробнее
                        </a>
                    </div>

                    <div class="empty" style="height: 1rem;"></div>
                </div>

                <div class="p-5 flex-grow-1 w-50 d-flex justify-content-center">
                    <img src="/public/images/slider-product.png" class="img-fluid w-75" loading="lazy" alt="">
                </div>

                <div class="swiper-lazy-preloader"></div>

                </div>

            </div>

            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>



            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 0
            }
        },
        methods: {
            rand: function() {
                return Math.floor(Math.random() * 9) + 1;
            }
        }
    }
</script>