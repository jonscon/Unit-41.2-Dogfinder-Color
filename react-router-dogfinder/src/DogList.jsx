import { Link } from "react-router-dom";

function DogList({ dogs }) {
    // list out each dog's name
    const dogInfo = dogs.map(d => (
        <div key={d.name}>
            <Link to={`/dogs/${d.name.toLowerCase()}`}>
                {d.name}
            </Link>
        </div>
    ))

    return (
        <div className="DogList">
            <h1>Click to see a dog's details!</h1>
            {dogInfo}
        </div>
    )
}

export default DogList;