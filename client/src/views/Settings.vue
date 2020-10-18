<template>

    <div>
        <div v-if="session.user">
            <section class="hero is-dark is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Account info
                        </h1>
                        <h2 class="subtitle"> 
                            
                            <div class="tile is-ancestor">
                                <div class="tile is-vertical is-8">
                                    <div class="tile">
                                    <div class="tile is-parent is-vertical">
                                        <article class="tile is-child notification is-primary">
                                            <p class="title">NAME</p>
                                            <p class="subtitle">{{session.user.name}}</p>
                                        </article>
                                        <article class="tile is-child notification is-warning">
                                            <p class="title">HANDLE</p>
                                            <p class="subtitle">@{{session.user.handle}}</p>
                                        </article>
                                    </div>
                                    <div class="tile is-parent">
                                        <article class="tile is-child notification is-info">
                                        <p class="title">PROFILE</p>
                                        <figure class="image is-4by3">
                                            <img :src="session.user.profile">
                                        </figure>
                                        </article>
                                    </div>
                                    </div>
                                    <div class="tile is-parent">
                                    <article class="tile is-child notification is-danger">
                                        <p class="title">ABOUT</p>
                                        <p class="subtitle">This tile is about you <br> coming soon...</p>
                                        <div class="content">
                                        <!-- Content -->
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child notification is-success">
                                    <div class="content">
                                        <p class="title">GOALS</p>
                                        <p class="subtitle">Set and track your goals <br> coming soon...</p>
                                        <div class="content">
                                        <!-- Content -->
                                        </div>
                                    </div>
                                    </article>
                                </div>
                            </div>

                        </h2>
                    </div>
                </div>
            </section>
        </div>

        <div v-if="session.user.handle == 'lcaccio'">
            <section class="hero is-dark is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Admin
                        </h1>
                        <h2 class="subtitle">
                            coming soon because I don't know how to edit users without a server...
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    </div>

    

</template>

<script>
import session from "@/models/session";

export default {
    data: ()=> ({
        session
    })
}
</script>

<style>

</style>