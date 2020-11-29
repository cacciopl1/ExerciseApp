<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img :src="`http://localhost:3001/public/profiles/${workouts.Owner_id}.jpg`">
                    </figure>
                </div>
                    <div class="media-content">
                        <p class="title is-4">{{workouts.FirstName}} {{workouts.LastName}}</p>
                        <p class="subtitle is-6">{{workouts.Exercise_Type}}</p>
                    </div>
                </div>

                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://a.abcnews.com/images/Lifestyle/HT_dailymoves_workouts_mm_151231.gif">
                    </figure>
                </div>

                <div class="content">
                    {{workouts.Note}}
                    <br>
                    <time :datetime="workouts.created_at">{{workouts.created_at}}</time>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        workouts: Object,
        i: Number
    }
}
</script>

<style>
    .card {
        margin-bottom: 15px;
    }

    time {
        font-size: smaller;
        font-style: italic;
        float: right;
    }
</style>