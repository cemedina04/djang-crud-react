import { useEffect, useState } from "react"
import { getAllTask } from "../api/task.api";
import { TaskCard } from "./TaskCard";

export function TaskList() {
    const [task, setTask ] = useState([]);

    useEffect(() => {
        async function LoadTask() {
            const res = await getAllTask();    
            setTask(res.data);          
        }
        LoadTask();
    }, []);

    return <div>
        {task.map((task) => (
           <TaskCard key={task.id} task={task} />
        ))}
    </div>;
}
