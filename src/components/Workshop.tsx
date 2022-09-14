import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import { useState } from "react";

import "./Workshop.css";

// This describes what data we expect for our table
type TableRowData = {
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
}

function Workshop() {
    // State variable that stores all the rows of our table
    const [rows, setRows] = useState<TableRowData[]>([
        {
            name: "Frozen Yoghurt",
            calories: 149,
            fat: 6,
            carbs: 3,
            protein: 4.4
        },
        {
            name: "Ice cream sandwich",
            calories: 237,
            fat: 9,
            carbs: 37,
            protein: 4.3
        },
        {
            name: "Eclair",
            calories: 262,
            fat: 16,
            carbs: 24,
            protein: 6
        }
    ]);

    // Step 1.1: Add state variables
    // Here is the state variable that is tied to our TextField component
    // Add more variables for the other TextFields here!
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fat, setFat] = useState("");
    const [protein, setProtein] = useState("");

    // Step 3: Complete the submit function here
    const onSubmit = () => {
        setRows(rows.concat({
            name: name,
            calories: parseInt(calories),
            fat: parseInt(fat),
            carbs: parseInt(carbs),
            protein: parseInt(protein),
        }));
        setName("");
        setCalories("");
        setFat("");
        setCarbs("");
        setProtein("");
    }

    // Step 1.2: Add more TextField components in-between the <div className={"input-row"}> tags
    // Step 2: Add your button right after the TextField components and in-between the <div className={"input-row"}> tags
    return (
        <div className={"workshop"}>

            <div className={"input-row"}>
                <TextField
                    required
                    label={"Dessert Name"}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    required
                    label={"Calories"}
                    value={calories}
                    onChange={(event) => setCalories(event.target.value)}
                />
                <TextField
                    required
                    label={"Carbs"}
                    value={carbs}
                    onChange={(event) => setCarbs(event.target.value)}
                />
                <TextField
                    required
                    label={"Fat"}
                    value={fat}
                    onChange={(event) => setFat(event.target.value)}
                />
                <TextField
                    required
                    label={"Protein"}
                    value={protein}
                    onChange={(event) => setProtein(event.target.value)}
                />
                <Button
                    id="submit-entry"
                    onClick={onSubmit}
                >Submit</Button>


                {/* Insert your components here! */}

            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat (g)</TableCell>
                            <TableCell align="right">Carbs (g)</TableCell>
                            <TableCell align="right">Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Workshop;
