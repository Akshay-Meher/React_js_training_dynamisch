import axios from "axios";
import React from "react";
import { useState } from "react";
import Posts from "./Posts";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Axios() {
    const [posts, setPosts] = useState([]);

    React.useEffect(() => {
        axios.get(baseURL + '/1').then((response) => {
            setPosts(response.data);
        });
    }, []);

    //& Post Method to Post data
    function createPost(data) {
        axios
            .post(baseURL, data)
            .then((response) => {
                setPosts(response.data);
            });
    }

    //& Put Method for Update data
    function updatePost() {
        axios
            .put(`${baseURL}/1`, {
                title: "Hello World!",
                body: "This is an updated post."
            })
            .then((response) => {
                setPosts(response.data);
            });
    }

    //& Delete Method for Detele data
    function deletePost() {
        axios
            .delete(`${baseURL}/1`)
            .then(() => {
                if (window.confirm("Do you really want to Delete?")) {
                    setPosts(null)
                }
            });
    }

    // console.log(posts)
    if (!posts) return <h1 className=' bg-green-300 p-4 m-4 rounded-lg'>No Data Available</h1>;

    return (
        <div className=' bg-green-300 p-4 m-4 rounded-lg'>
            <TakeInput
                createPost={createPost}
                updatePost={updatePost}
                deletePost={deletePost}
            />
            <Posts
                posts={posts}
                setPost={setPosts}
            />
        </div>
    );
}


//&  Another Component for Input Feilds
function TakeInput({ createPost, updatePost, deletePost }) {
    const [input, setInput] = useState({
        title: "",
        body: ""
    });

    return (
        <div>
            <form
                onSubmit={e => {

                    e.preventDefault();
                    input.title && input.body && createPost(input);
                    setInput({
                        title: "",
                        body: ""
                    });
                }}
                className=" flex flex-col justify-center m-1 p-1"
            >
                <lable className=" w-1/9" >
                    Title:
                    <input
                        value={input.title}
                        onChange={e => setInput(prev => ({
                            ...prev,
                            title: e.target.value.trim(),
                        }))}
                        className=" w-1/9"
                        type="text"
                        placeholder="Title"
                    />
                </lable>
                <lable className=" w-1/9 text-black">
                    Body:
                    <textarea
                        value={input.body}
                        onChange={e => setInput(prev => ({
                            ...prev,
                            body: e.target.value.trim(),
                        }))}
                        className=" w-1/9 p-1"
                        type="textarea"
                        placeholder="Body.."
                    />
                </lable>
                <button className=" bg-red-400 m-1 p-1 rounded-lg hover:bg-red-700">Create Post</button>
                <input
                    onClick={updatePost}
                    className="text-white bg-red-400 m-1 p-1 rounded-lg hover:bg-red-700"
                    type="button"
                    value='Update Post'
                />
                {/* <i className='bx bxs-edit bg-red-400' onClick={updatePost}></i> */}
                <input
                    onClick={deletePost}
                    className="text-white bg-red-400 m-1 p-1 rounded-lg hover:bg-red-700"
                    type="button"
                    value='Delete Post'
                />
            </form>
        </div>
    )
}