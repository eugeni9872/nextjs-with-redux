import React from 'react'
import {connect} from 'react-redux'
import { savePosts } from '../actions/PostActions';
import { getPosts } from '../http/requests';
class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {

    const posts = await getPosts();
    await reduxStore.dispatch(savePosts(reduxStore.dispatch, posts))

    return {}
  }



  render () { 

   
    return (
     <div>
       {this.props.posts.map((el, indx) => {
         return <h2 key={indx}>{el.title}</h2>
       })}
     </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}
export default connect(mapStateToProps)(Index)
