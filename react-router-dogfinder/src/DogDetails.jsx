import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
    const params = useParams();

    // will render this on page
    let dogInfo;

    // find the dog's information based on param name
    for (let i = 0; i < dogs.length; i++) {
        if (dogs[i].name.toLowerCase() === params.name) {
            dogInfo = (
                <div key={dogs[i].name}>
                    <p>{dogs[i].name}</p>
                    <p>{dogs[i].age}</p>
                    <ul>{dogs[i].facts.map(f => (
                        <li>{f}</li>
                        ))}
                    </ul>
                </div>
            )
            break;
        }
    }

    return (
        <div className="DogDetails">
            {dogInfo}
        </div>
    )
}

export default DogDetails;