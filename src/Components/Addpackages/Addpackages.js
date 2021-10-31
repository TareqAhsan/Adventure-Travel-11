import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Addpackages = () => {
      const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
      const onSubmit = data => {console.log(data);
      axios.post("https://macabre-goosebumps-11185.herokuapp.com/addnew",data).then(result=>{
          if(result.data.insertedId){
              alert('data inserted successfully')
              reset()
          }
      })  
    }
    return (
        <div className="container my-5">
            <h1 className="py-3">Add new Packages</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="shadow p-3 rounded-3">
            {/* register your input into the hook by invoking the "register" function */}
            <input
              className="form-control mb-3"
              {...register("name")}
              placeholder="name of package"
            />
            <input
              className="form-control mb-3"
              {...register("price")} placeholder="price"
         
            />
            <input
              className="form-control mb-3"
              {...register("description")}
              placeholder="description"
             
            />
            {/* include validation with required or other standard HTML validation rules */}
            <input
              className="form-control mb-3"
              {...register("img")}
              placeholder="PhotoUrL"
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input  className="btn btn-primary" type="submit" value="ADD" />
          </form>
        </div>
    );
};

export default Addpackages;