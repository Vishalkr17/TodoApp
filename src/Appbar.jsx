import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AppBar() {
    const navigate = useNavigate();
    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
        zIndex: 1
    }}>
        <div style={{marginLeft: 10}}>
            <h1>TodoRobots</h1>
        </div>

        <div style={{display: "flex"}}>
            <div style={{marginRight: 10, paddingTop: 20}}>
                <Button
                    variant={"contained"}
                    sx = {{backgroundColor: "green"}}
                    onClick={() => {
                        navigate("/todos")
                    }}
                >Show Todos</Button>
            </div>
        </div>
    </div>
}

export default AppBar;