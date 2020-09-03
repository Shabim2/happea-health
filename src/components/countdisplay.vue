<template>
    <div>
        <div>
            The count has been clicked this many times
        <p>{{count}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "countdisplay",
    props: {
        count: Number
    }
}
</script>

<style>

</style>