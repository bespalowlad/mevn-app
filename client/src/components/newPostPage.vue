<template lang="pug">
  .container
    .row
      .col-xs-12
        h1
          | Add New Post
        form
          .form-group
            input.form-control( type="text", name="title", id="title", placeholder="Title", v-model="post.title" )
          .form-group
            textarea.form-control( type="text", rows="5", name="description", id="description", placeholder="Description", v-model="post.description" )
          .form-group
            button.btn.btn-block.btn-primary( type="button", name="addPost", id="addPost", @click="addPost" )
              | add new post
          section
            button.btn.btn-success.btn-block( type="button", @click="goBack()" )
              | go to posts page
</template>

<script>
import PostServices from '@/services/postsServices'

export default {
  name: 'NewPost',
  data: function () {
    return {
      post: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    async addPost () {
      if (this.post.title !== '' && this.post.description !== '') {
        await PostServices.addNewPost({
          title: this.post.title,
          description: this.post.description
        })
        this.$router.push({path: '/posts'})
      } else {
        alert('empty fields')
      }
    },
    goBack () {
      this.$router.push({ path: '/posts' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
