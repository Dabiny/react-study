import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";
import React from "react";
import loading from "../modules/loading";

const {useEffect} = React;

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    // useEffect(() => {
    //     getPost(1); // id 파라미터를 건네주고 있음. 
    //     getUsers(1); // 위와 동일
    // }, [getPost, getUsers]);
    useEffect(() => {
        const fn = async () => {
            try {
                await getPost(1);
                await getUsers(1);
            }
            catch(e) {
                console.log(e);
            }
        }
        fn();
    }, [getPost, getUsers]);

    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);