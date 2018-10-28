import React from 'react'
import Link from 'next/link';
import {connect} from 'react-redux'
import { savePosts } from '../actions/PostActions';
import { getPosts } from '../http/requests';


class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {

    const posts = await getPosts();
    await reduxStore.dispatch(savePosts(posts))
    return {}
  }



  render () { 


    return (
     <div>
        <Link href="/users">
          <a>
            Users
          </a>
        </Link>

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
export default connect(mapStateToProps, null)(Index)
