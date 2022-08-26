<template>
    <!-- Container -->
    <div class="container-fluid">
        <HeaderRow />

        <!-- Main row  -->
        <div class="row mt-4 ">
            <CategoriesCol />

            <!-- Content -->
            <div class="col-12 col-md-10 mt-4 mt-md-0">
                <router-view />
            </div>
            <!-- Content -->

        </div>
        <!-- Main row -->

        <FooterRow author="@Abdullokh_dev"/>
    </div>
    <!-- Container -->
</template>

<script>

import HeaderRow from "@/components/HeaderRow";
import CategoriesCol from "@/components/CategoriesCol";
import FooterRow from "@/components/FooterRow";

export default {
    name: 'App',
    components: {
         FooterRow, CategoriesCol, HeaderRow
    }
}
</script>

<style>

</style>
