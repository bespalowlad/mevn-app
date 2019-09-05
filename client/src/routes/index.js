import Start from '@/components/startPage'
import PostsPage from '@/components/postsPage'
import NewPost from '@/components/newPostPage'
import EditPost from '@/components/editPostPage'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/posts',
    name: 'PostsPage',
    component: PostsPage
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/post/:id',
    name: 'EditPost',
    component: EditPost
  }
]
export default routes
