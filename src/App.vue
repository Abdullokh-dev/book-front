<template>
    <!-- Kontainer boshlandi -->
    <div class="container-fluid">
        <HeaderRow />

        <!-- Main qator boshlandi -->
        <div class="row mt-4 ">
            <CategoriesCol />

            <!-- Kontent boshlandi -->
            <div class="col-12 col-md-10 mt-4 mt-md-0">
                <router-view />
            </div>
            <!-- Kontent tugadi -->

        </div>
        <!-- Main qator boshlandi -->

        <FooterRow />
    </div>
    <!-- Kontainer tugadi -->
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
