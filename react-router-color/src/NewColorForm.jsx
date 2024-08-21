import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ createColor }) {
const navigate = useNavigate();

    const INITIAL_STATE = {
        colorName: "",
        colorValue: "",
    }
    
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    // gather input values to create new color
    const gatherInput = e => {
        e.preventDefault();
        createColor({...formData});
        setFormData(INITIAL_STATE);
        navigate("/colors");
    }
    
    return (
        <form className="NewColorForm" onSubmit={gatherInput}>
            <div>
                <label htmlFor="colorName">Color Name</label>
                <input 
                    onChange={handleChange}
                    type="text"
                    name="colorName"
                    id="colorName"
                    placeholder="Enter a name for the color"
                    value={formData.colorName}
                />
            </div>
            <div>
                <label htmlFor="colorValue">Color Value</label>
                <input 
                    onChange={handleChange}
                    type="color"
                    name="colorValue"
                    id="colorValue"
                    value={formData.colorValue}
                />
            </div>
            <button id="addColorButton">Add Color</button>
        </form>
    )
}

export default NewColorForm;