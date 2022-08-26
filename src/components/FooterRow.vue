<template>
    <div class="row fixed-bottom">
        <div class="col">
            <footer class="bg-dark text-light p-5 mt-4">
                © All rights reserved {{ author }}
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterRow",
    props: {
        author: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>

</style>
