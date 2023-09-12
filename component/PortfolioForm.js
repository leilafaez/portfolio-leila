import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useState,useEffect } from "react";

const PortfolioForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate]=useState(null);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(()=>{
    register("startDate");
    register( "endDate");
  },[register])

 
  const handleDateChange =(dateType,setDate)=>(date)=>{
    setValue(dateType, date);
    setDate(date)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mt-2">
        <label htmlFor="title">Title</label>
        <input
          // ref={register}
          name="title"
          type="text"
          className="form-control mt-2"
          id="title"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="company">Company</label>
        <input
          // ref={register}
          name="company"
          type="text"
          className="form-control mt-2"
          id="company"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          // ref={register}
          name="companyWebsite"
          type="text"
          className="form-control mt-2"
          id="companyWebsite"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="location">Location</label>
        <input
          // ref={register}
          name="location"
          type="text"
          className="form-control mt-2"
          id="location"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          // ref={register}
          name="jobTitle"
          type="text"
          className="form-control mt-2"
          id="jobTitle"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="description">Description</label>
        <textarea
          // ref={register}
          name="description"
          rows="5"
          type="text"
          className="form-control mt-2"
          id="description"
        ></textarea>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange("startDate", setStartDate)}
          />
        </div>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="endDate">End Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={endDate}
            onChange={handleDateChange("endDate", setEndDate)}
          />
        </div>
      </div>
      <div className="form-group mt-2">
        {endDate && (
          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={() => handleDateChange("endDate", setEndDate)(null)}
          >
            No End Date
          </button>
        )}
        {!endDate && (
          <button
            type="button"
            className="btn btn-success mt-2"
            onClick={() =>
              handleDateChange(
                "endDate",
                setEndDate
              )(new Date(new Date().setHours(0, 0, 0, 0)))
            }
          >
            Set End Date
          </button>
        )}
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Create
      </button>
    </form>
  );
};
export default PortfolioForm;
