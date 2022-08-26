<template>
    <BooksRow />
    <PaginationRow />
</template>

<script>
import BooksRow from "@/components/BooksRow";
import PaginationRow from "@/components/PaginationRow";
export default {
    name: "HomePage",
    components: { PaginationRow, BooksRow }
}
</script>

<style scoped>

</style>
