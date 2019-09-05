<template lang="pug">
  .container
    .row
      .col-xs-12
        h1 Posts
        h3 This file will list all the posts
        section.panel.panel-success( v-if="posts.length" )
          .panel-heading list of posts
          table.table.table-striped
            tr
              th Title
              th Description
              th Action
            tr( v-for="(post, index) in posts" :key="post.title" )
              td {{ post.title }}
              td {{ post.description }}
              td
                router-link.btn.btn-primary.btn-sm(:to="'/post/' + post.title") Edit
                button.btn.btn-danger.btn-sm(@click="removePost(post.title)") Delete
        section.panel.panel-danger( v-if="!posts.length" )
          p There are no posts ... Lets add one now!
        div
          router-link( :to="{ name: 'NewPost' }" )
            | add new post
</template>

<script>
import PostsServices from '@/services/postsServices'

export default {
  name: 'postsPage',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts () {
      const response = await PostsServices.fetchPost()
      this.posts = response.data.posts
    },
    async removePost (id) {
      await PostsServices.deletePost(id)
      this.getPosts()
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style lang="scss" scoped>

</style>
