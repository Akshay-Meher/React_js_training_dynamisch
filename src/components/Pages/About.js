import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function About() {

    const location = useLocation();   // return location object that can conatin current path ,URL, search ,state

    return (
        <div>
            <div>
                <h3>About Page</h3>

                <div style={{ width: "60vw", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20%" }}>
                    <p style={{ textAlign: "justify", fontSize: "medium", marginTop: "10px" }}>
                        Client Side Routing
                        React Router enables "client side routing".

                        In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

                        Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

                        This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.
                    </p>


                </div>
                {/* <p>Location is {location.key}</p>
                    <p>Location is {location.hash}</p> */}
                <p>current path :- {location.pathname}</p>


                <button style={{ margin: '5px' }}>
                    <Link to="/profile/janesmith">Jane Smith's Profile</Link>
                </button>
                <button style={{ margin: '5px' }}>
                    <Link to="/profile/janesmith">John Doe's Profile</Link>
                </button >
            </div>

        </div>
    )
}

export default About;