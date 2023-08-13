import { Button, Card, CardActions, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function AddTodo() {
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("");

    return  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
    <div className='tc br3 ma2 grow bw2 shadow-5'>
        <Card style={{ width: 300,  minHeight: 200, padding: 8 , backgroundColor:"#9eebcf"}} >
            <div>
            <TextField
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                label="Title"
                variant="outlined"
                fullWidth
                style={{ marginTop: 16 }}
            /> 

            <TextField
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                label="Description"
                variant="outlined"
                fullWidth
                style={{ marginTop: 16 }}
            />
            
            <CardActions style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
              <Button
                variant="contained"
                size="large"
                onClick={ async () =>{
                    await axios.post("http://localhost:3000/todos", {
                        title: title,
                        description: description

                    });
                    alert("Todo added successfully");
                }
                
            }
                >Add Todo</Button>
            </CardActions>
            
            </div>     
        </Card>
    </div>
</div>

}

export default AddTodo;