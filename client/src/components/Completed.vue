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

                <div class="media" v-for="c in workouts.Comments" :key="c.id">
                    <div class="media-content">
                        <span>
                            <b>{{c.FirstName}} {{c.LastName}} </b>
                            {{c.Text}}
                        </span>
                    </div>
                </div>

                <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input class="input" type="text" placeholder="Add a Comment" v-model="commentText">
                    </p>
                    <p class="control">
                        <a class="button is-primary" @click.prevent="comment">
                            <i class="fas fa-comment"></i>
                        </a>
                    </p>
                </div>

                <footer class="card-footer">
                    <a href="" class="card-footer-item" @click.prevent="like">
                        <i class="fas fa-heart"></i>
                        {{workouts.Reactions}}
                    </a>
                    <a href="" class="card-footer-item">
                        <i class="fas fa-user-plus"></i>
                    </a>
                </footer>
        </div>
    </div>
</template>

<script>

import { like, comment  } from "../models/mytracked";

export default {
    data: ()=>({
        commentText: ''
    }),
    props: {
        workouts: Object,
        i: Number
    },
    methods: {
        like() {
            const that = this;
            like(this.workouts.id)
            .then(x=> that.workouts.Reactions += 1)
            .catch(err=> console.error(err))
        },
        async comment() {
            const response = await comment(this.workouts.id, this.commentText);
            this.workouts.Comments.push(response);
        }
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