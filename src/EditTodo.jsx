import { Button, Card, CardActions, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function EditTodo() {
    let {todosId} = useParams();
    const [todo, setTodo] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
          const res = await axios.get(
            `http://localhost:3000/todos/${todosId}`
          );
          setTodo(res.data);
        };
    
        if (!todo) {
          getData();
        }
    
      }, []);

     
    return <div className="tc">
         <UpdateCard todo={todo} todosId={todosId} />
    </div>


}

    function UpdateCard({todo, todosId}) {

        if (!todo) {
            return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </div>
            );
        }

        const [title,setTitle] = useState(todo.title || "");
        const [description, setDescription] = useState(todo.description || "");

        return  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
        <div className='tc br3 ma2 grow bw2 shadow-5'>
            <Card style={{ width: 300,  minHeight: 200, padding: 8 , backgroundColor:"#9eebcf"}} >
                <div>
                <TextField
                    value ={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    label="Title"
                    variant="outlined"
                    fullWidth
                    style={{ marginTop: 16 }}
                /> 

                <TextField
                    value={description}
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
                        await axios.put(`http://localhost:3000/todos/${todosId}`, {
                            title: title,
                            description: description
                        });
                        alert("Todo updated successfully");
                    } 
                }
                    >Update Todo</Button>
                </CardActions>
                
                </div>     
            </Card>
        </div>
    </div>
}




export default EditTodo;