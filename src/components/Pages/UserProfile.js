import { useParams } from "react-router-dom";
export default function UserProfile() {

    let { username } = useParams();

    return (
        <div className="m-4 p-4 border-1  border-black  rounded-lg">
            <h2>User Profile</h2>
            <p>Username: {username}</p>
        </div>
    );
}