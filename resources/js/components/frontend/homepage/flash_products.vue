<template>
    <section class="products-section" v-if="lengthCounter(products)>0">
        <div class="container">
            <div class="title justify-content-between">
                <h1 >{{lang.flash_sale}}</h1>
                <a :href="getUrl('flash-sale')" @click.prevent="routerNavigator('flash.sale')">{{lang.more_products }}<span
                    class="icon mdi mdi-name mdi-arrow-right"></span></a>
            </div>
            <productCarouselList :products="products" :grid_class="'grid-2'" :type="'flash'"></productCarouselList>
        </div><!-- /.container -->
    </section>
    <section class="products-section" v-else-if="shimmer">
        <div class="container">
            <div class="container" >
                <ul class="products grid-2" >
                    <li v-for="(product,index) in 4" :key="index">
                        <div class="sg-product" >
                            <a href="javascript:void(0)">
                                <shimmer :height="290"></shimmer>
                            </a>
                        </div><!-- /.sg-product -->
                    </li>
                </ul>
            </div>
        </div><!-- /.container -->
    </section>
</template>

<script>
import productCarouselList from "../pages/product-carousel-list";
import shimmer from "../partials/shimmer";

export default {
    name: "flash_products",
    components: {
        productCarouselList,shimmer
    },
    props: ['flash_products'],
    watch : {
        homeResponse()
        {
            this.$store.commit('setShimmer',0);
        }
    },
    computed : {
        products()
        {
            if (this.flash_products && this.flash_products.length > 0)
            {
                return this.flash_products;
            }
            else{
                return [];
            }
        },
    }
}
</script>
