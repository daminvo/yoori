<template>
    <section class="products-section" v-if="lengthCounter(products)>0">
        <div class="container">
            <div class="title justify-content-between">
                <h1>{{ lang.today_deals}}</h1>
                <a :href="getUrl('daily-deals')" @click.prevent="routerNavigator('daily.deals')">{{lang.more_products}}<span class="icon mdi mdi-name mdi-arrow-right"></span></a>
            </div>
            <productCarousel :products="today_deals" :grid_class="'grid-6'"></productCarousel>
        </div><!-- /.container -->
    </section><!-- /.section --><!-- /.modal -->
    <section class="products-section bg-white" v-else-if="shimmer">
        <div class="container">
            <ul class="products grid-6" >
                <li v-for="(product,index) in 6" :key="index">
                    <div class="sg-product" >
                        <a href="javascript:void(0)">
                            <shimmer :height="290"></shimmer>
                        </a>
                    </div><!-- /.sg-product -->
                </li>
            </ul>
        </div><!-- /.container -->
    </section><!-- /.section -->
</template>

<script>
import productCarousel from "../pages/product-carousel";
import shimmer from "../partials/shimmer";

export default {
    name: "today_deals",
    components : {
        productCarousel,shimmer
    },
    props : ['today_deals'],
    watch : {
        homeResponse()
        {
            this.$store.commit('setShimmer',0);
        }
    },
    computed : {
        products()
        {
            if (this.today_deals && this.today_deals.length > 0)
            {
                return this.today_deals;
            }
            else{
                return [];
            }
        },
    },
}
</script>
