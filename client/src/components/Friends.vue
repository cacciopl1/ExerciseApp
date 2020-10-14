<template>
    <nav class="panel is-black">
        <p class="panel-heading">
            Friends
        </p>
        <div class="panel-block">
            <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search">
            <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>Favorites</a>
        </p>
        <a class="panel-block is-active">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Dominic
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Wendy
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Emma
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Halle
        </a>
        <div class="panel-block">
            <button class="button is-danger is-outlined is-fullwidth">
            Reset Favorites
            </button>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>