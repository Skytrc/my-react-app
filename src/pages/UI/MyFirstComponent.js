// Defining my first component

function Profile() {
    return(
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    );
}

export default function Gallery() {
    // section tag is create a generic standalone  
    // section of a document
    return(
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}