import { useEffect } from "react";
import {useForm} from "react-hook-form";
import {createTask, deleteTask, updateTask, getTask } from "../api/task.api";
import { useNavigate, useParams } from "react-router-dom";

export function TaskFormPage() {
  const {
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data)
    } else {
      await createTask(data);
    }

    navigate("/task");
  });

  useEffect(() => {
    async function loadTask() {
      if(params.id){
        const res = await getTask(params.id);
        setValue('title', res.data.title);
        setValue('description', res.data.description);
       
      }
    }
    loadTask();
  }, [])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
           placeholder="title" 
           {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required</span>}

        <textarea 
          rows="3" 
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>Description is required</
        span>}

        <button>Save</button>
      </form>

      {params.id && (
        <button
          onClick={async () => { 
            const accepted = window.confirm("Are you sure?");
            if (accepted){ 
              await deleteTask(params.id);
              navigate("/task");
            }
          }}
        >
          Delete 
        </button>
      )}
    </div>
  ); 
}