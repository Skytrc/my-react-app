const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export default function WithCurlyBraces() {
    return(
        // use curly braces
        <h1>To Do List 2 for {formatDate(today)}</h1>
    );
}

export function DoubleCurlies() {
    return (
        // pass the JS object in JSX
        <ul style={{
            background: 'black',
            color: 'pink'
        }}>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    );
}