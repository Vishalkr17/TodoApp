import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";

function TodoList({ todos, onDelete }) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
    );
  }

  function TodoItem({ todo, onDelete }) {
    return (
      <div>
         <div key={todo.id} className="br3 ma2 grow bw2 shadow-5">
         
          <Card style={{ width: 300, padding: 8, backgroundColor: "#9eebcf" }}>
            
            <CardContent>
              
              <Typography textAlign="center" variant="h6" fontWeight={700}>
                {todo.title}
              </Typography>
              
              <div style={{ minHeight: 50, padding: 8 }}>
                <Typography textAlign="center">{todo.description}</Typography>
              </div>

            </CardContent>

            <CardActions style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
              <Button
                variant="contained"
                size="large"
                color="error"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </Button>
      
              <Button
                variant="contained"
                size="large"
                onClick={() => onEdit(todo.id)}
              >
                Edit
              </Button>
            </CardActions>

        </Card>

        </div>
      </div>
    );
  }

export default TodoList;