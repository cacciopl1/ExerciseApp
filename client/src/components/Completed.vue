<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img :src="tracked.user.profile">
                    </figure>
                </div>
                    <div class="media-content">
                        <p class="title is-4">{{tracked.user.name}}</p>
                        <p class="subtitle is-6">@{{tracked.user.handle}}</p>
                    </div>
                </div>

                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="tracked.image">
                    </figure>
                </div>

                <div class="content">
                    {{tracked.message}}
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tracked: Object
    }
}
</script>

<style>
    .card {
        margin-bottom: 15px;
    }
</style>