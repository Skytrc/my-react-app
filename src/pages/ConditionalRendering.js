
// use : ? syntax
// function Item({ name, isPacked }) {
//     return (
//         <li className="item">
//             {isPacked ? (
//                  <del>
//                     {name + '√'}
//                  </del>
//             ) : (
//                 name
//             )}
//         </li>
//     );
// }

// use && syntax
// function Item2({ name, isPacked }) {
//     return (
//         <li className="item">
//             {/* if isPacked is true, render √ */}
//             {name} {isPacked && '√'}
//         </li>
//     )
// }

// conditionally assigning JSX to a variable
function Item3({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + "√"}
            </del>
        )
    }

    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return(
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item3
                    isPacked={true}
                    name="Space suit"
                />
                <Item3 
                    isPacked={true} 
                    name="Helmet with a golden leaf" 
                />
                <Item3 
                    isPacked={false} 
                    name="Photo of Tam" 
                />
            </ul>
        </section>
    );
}

