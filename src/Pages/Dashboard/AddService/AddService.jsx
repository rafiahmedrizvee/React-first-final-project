import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddService = (data) => {
    const name = data.name;
    const description = data.description;
    const image = data.image[0];

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    fetch("https://visa-embassy-server.vercel.app/add-service", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Service added Successfully Done");
          reset();
          navigate("/dashboard/manage-service");
        }
      });
  };
  return (
    <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleAddService)} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Service Name is required",
            })}
            className="input"
            placeholder="Service Name"
          />

          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label className="label">Description</label>
          <textarea
            type="text"
            {...register("description", {
              required: "description is required",
            })}
            className="input h-20"
            placeholder="description"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
          <label className="label">Photo</label>
          <input
            {...register("image", {
              required: "Photo is required",
            })}
            type="file"
            className="input "
            accept="image/*"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}

          <input
            type="submit"
            value="Add Service"
            className="btn btn-primary mt-4 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
