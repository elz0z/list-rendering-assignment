import Header from "./Header";
import Post from "./Post";
import Aside from "./Aside";
function App() {
    const posts = [
        {
            id: 1,
            title: "Post 1",
            body: "amet occaecat eu nisi excepteur sunt id deserunt id sunt"
        },
        {
            id: 2,
            title: "Post 2",
            body: "aliqua id minim exercitation eiusmod reprehenderit aliquip aute duis ea"
        },
        {
            id: 3,
            title: "Post 3",
            body: "excepteur sunt sint cupidatat aliqua nostrud tempor consequat exercitation dolore"
        },
        {
            id: 4,
            title: "Post 4",
            body: "cillum fugiat sint eiusmod minim Lorem et officia esse enim voluptate ecia esse enim voluptate esse aliquip"
        }
    ];
    const postList = posts.map(post => {
        return (
            <Post key={post.id} postTitle={post.title} postBody={post.body} />
        );
    });

    return (
        <>
            <Header />
            {/*POST AND SIDEMENU CONTAINER*/}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "85vw",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            >
                {/*POST CONTAINER*/}
                <main style={{ width: "65%" }}>{postList}</main>
                {/***POST CONTAINER***/}

                {/*ASIDE CONTAINER*/}
                <div
                    style={{
                        width: "32%"
                    }}
                >
                    <Aside />
                </div>
                {/***ASIDE CONTAINER***/}
            </div>
            {/*POST AND SIDEMENU CONTAINER*/}
        </>
    );
}
export default App;
