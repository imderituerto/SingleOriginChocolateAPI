import { Link } from "react-router-dom";

const Chocolate = ({chocolate, deleteChocolate, updateChocolate}) => {


    const handleDeleteChocolate = () => {
        deleteChocolate(chocolate.id);
    }

    const handleEditChocolate = () => {
        updateChocolate(chocolate.id);
    }

    return (
        <>
            <h4>{chocolate.name}</h4>
            <p>Estate: {chocolate.estate.name}</p>
            <p>Cocoa %: {chocolate.cocoaPercentage}</p>
            <button onClick={handleDeleteChocolate}>
                Delete
            </button>
            <button>
            <Link to={`/edit-chocolate/${chocolate.id}`} onClick={handleEditChocolate}>
                Edit
            </Link>
            </button>
            <hr />
        </>
    )
}

export default Chocolate;