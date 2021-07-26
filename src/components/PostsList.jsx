import { fetchPostsAndUsers } from "../actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";
import "./styles.css";

const renderPosts = (posts) => {
    return posts.map((post) => {
        return(
            <div key={post.id} className="wrapper">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <span>{<UserHeader userId={post.userId}/>}</span>
            </div>
        );
    });
}
const PostsList = ({posts, fetchPostsAndUsers}) => {
    useEffect(()=>{
        fetchPostsAndUsers();
    },[fetchPostsAndUsers]);
    return (
        <div>{renderPosts(posts)}</div>
    );
}

const mapStateToProps = (store) => {
    return {
        posts : store.posts
    }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostsList);