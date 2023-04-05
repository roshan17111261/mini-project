<template>
    <div>
        <div class="col-4">
            <div v-for="product in products">
                <section>
                    <router-link :to="'detail/'+product.id" >
                    <img :src="product.images[0]" title="product.title" />
                </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                    </div>
                </section>


            </div>

        </div>
    </div>
</template>
<script>
import router from '@/router';
import { getPhones, getMyPhone } from '../services/phones';

export default {
    name: "ProductView",
    
    data() {
        return {
            products: [],
        };
    },
    async mounted() {
        this.products = await getPhones();
    },
   
    components: { router }
}
</script>

<style>
img {
    cursor: pointer;
}
.card {
    margin: 10px;
    margin-bottom: 50px;
}
</style>