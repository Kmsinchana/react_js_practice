import { Link, useLoaderData } from "react-router-dom"
//to fetch all the post
export default function AllPostDisplay() {
    const posts = useLoaderData()
    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1>All the posts list</h1>

                <div
                    style={{
                        display: "grid",
                        // repeat(n, value)	A function to repeat a pattern of column sizes n times. repeat(3, 1fr) creates three equal-width columns.
                        // minmax(100px, 1fr) ensures a minimum of 100px but allows it to grow to fill available space.
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        gap: "16px",
                        marginTop: "20px"
                    }}
                >
                    {posts.map((p) => (
                        <Link
                        // each child should have unique id otherwise we will get warning in console
                            key={p.id} 
                            to={`/posts/${p.id}`}
                            style={{
                                textDecoration: "none",
                                backgroundColor: "white",
                                padding: "15px",
                                borderRadius: "10px",
                                border: "1px solid #ccc",
                                color: "black",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                transition: "0.2s",
                            }}
                            // e.target → the button
                            //e.currentTarget → the div
                            onMouseEnter={(e) => {
                                console.log(e.currentTarget)
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
                            }}
                        >
                            <h3 style={{ marginBottom: "10px",  color:"red"}}>{p.title}</h3>
                            <p style={{ fontSize: "14px", lineHeight: "1.4" }}>{p.body}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}