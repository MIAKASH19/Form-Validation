import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup.string().email("email is vull").required("Email is required"),

  age: yup
    .number()
    .typeError("Value must be a number")
    .required("Age is required"),

  dob: yup
    .date()
    .typeError("Value must be a date")
    .required("Date of Birth is required"),

  gender: yup
    .string()
    .oneOf(["male", "female"], "Invalid gender")
    .label("Gender")
    .required(),

    department: yup.string().oneOf(["science", "commerce","arts"], "Invalid department").label("Department").required(),

    skills: yup.array().required().label("Skills").min(1).max(3),

    eyeColor: yup.string().required().label("Eye color")
});

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="app flex items-centerh justify-center ml-10 mt-10 w-screen overflow-hidden">
      <form
        action=""
        className="flex flex-col gap-4 w-[50%] max-w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-[100%]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="p-2 border"
            {...register("name")}
          />

          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>

        <div className="flex flex-col w-[100%]">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="p-2 border"
            {...register("email")}
          />

          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Age"
            id="age"
            className="p-2 border"
            {...register("age")}
          />

          <ErrorMessage
            errors={errors}
            name="age"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            placeholder="Date of Birth"
            id="dob"
            className="p-2 border"
            {...register("dob")}
          />

          <ErrorMessage
            errors={errors}
            name="dob"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="gender">Gender</label>
          <select
            className="p-2 border"
            name="gender"
            id="gender"
            {...register("gender")}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <ErrorMessage
            errors={errors}
            name="gender"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>

        <div>
          <label>Department</label>
          <div className="flex">
            <div className="flex">
              <input
                type="radio"
                value="science"
                id="Science"
                className="p-2 border"
                {...register("department")}
              />
              <label htmlFor="Science" className="p-2">
                Science
              </label>
            </div>

            <div className="flex">
              <input
                type="radio"
                value="commerce"
                id="Commerce"
                className="p-2 border"
                {...register("department")}
              />
              <label htmlFor="Commerce" className="p-2">
                Commerce
              </label>
            </div>

            <div className="flex">
              <input
                type="radio"
                value="arts"
                id="Arts"
                className="p-2 border"
                {...register("department")}
              />
              <label htmlFor="Arts" className="p-2">
                Arts
              </label>
            </div>
          </div>

          <ErrorMessage
            errors={errors}
            name="department"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>

        <div className="skills">
          <label>Skills:</label>
            <div className="flex flex-wrap">
              <div className="flex">
                <input 
                type="checkbox" 
                id="react"
                className="p-2 border"
                value={"react"}
                />
                <label htmlFor="react" className="p-2">React</label>
              </div>
              <div className="flex">
                <input 
                type="checkbox" 
                id="javascript"
                className="p-2 border"
                value={"javascript"}
                {...register("skills")}
                />
                <label htmlFor="javascript" className="p-2">Javascript</label>
              </div>
              <div className="flex">
                <input 
                type="checkbox" 
                id="html"
                className="p-2 border"
                value={"html"}
                {...register("skills")}
                />
                <label htmlFor="html" className="p-2">HTML</label>
              </div>
              <div className="flex">
                <input 
                type="checkbox" 
                id="css"
                className="p-2 border"
                value={"css"}
                {...register("skills")}
                />
                <label htmlFor="css" className="p-2">CSS</label>
              </div>
              <div className="flex">
                <input 
                type="checkbox" 
                id="node"
                className="p-2 border"
                value={"node"}
                {...register("skills")}
                />
                <label htmlFor="node" className="p-2">Node</label>
              </div>
              <div className="flex">
                <input 
                type="checkbox" 
                id="express js"
                className="p-2 border"
                value={"express js"}
                {...register("skills")}
                />
                <label htmlFor="express js" className="p-2">Express JS</label>
              </div>
              <div className="flex">
                <input 
                type="checkbox" 
                id="vue"
                className="p-2 border"
                value={"vue"}
                {...register("skills")}
                />
                <label htmlFor="vue" className="p-2">Vue</label>
              </div>
              <div className="flex">
                <input 
                type="checkbox" 
                id="angular"
                className="p-2 border"
                value={"angular"}
                {...register("skills")}
                />
                <label htmlFor="angular" className="p-2">Angular js</label>
              </div>
              <div className="flex">
                <input 
                type="checkbox" 
                id="framer motion"
                className="p-2 border"
                value={"framer motion"}
                {...register("skills")}
                />
                <label htmlFor="framer motion" className="p-2">Framer Motion</label>
              </div>
            </div>
            <ErrorMessage
            errors={errors}
            name="skills"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
        
        <div className="flex flex-col ">
          <label htmlFor="eyeColor">Eye Color</label>
          <input
            type="color"
            id="eyeColor"
            className=" border"
            {...register("eyeColor")}
          />

          <ErrorMessage
            errors={errors}
            name=" eyeColor"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>

        <button
          type="submit"
          className="px-2 py-3 bg-blue-500 hover:bg-blue-700 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;