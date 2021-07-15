import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
// import { alpha } from '@material-ui/core/styles';

/*
const classes = makeStyles((theme) => ({
  backgroundColor: alpha(
    theme.palette.primary.main,
    theme.palette.action.selectedOpacity
  ),
}));
*/

function App() {
  const [gig, setGig] = useState({
    venuename: '',
    bandname: '',
    bandlink: '',
    city: '',
    desc: '',
    link: '',
    public: true,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGig({ ...gig, [name]: value });
  };

  const [selectedDate, handleDateChange] = useState(new Date());

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked((prevCheck) => !prevCheck);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // need to parse the Moment date object before sending to MongoDB
    const gigObject = { ...gig, date: selectedDate, public: isChecked };
    console.log(gigObject);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <form>
        <div>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </div>
        <div>
          <label htmlFor="venuename">Venue Name: </label>
          <input
            type="text"
            id="venuename"
            name="venuename"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="bandname">Band Name: </label>
          <input
            type="text"
            id="bandname"
            name="bandname"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="bandlink">Band Link: </label>
          <input
            type="text"
            id="bandlink"
            name="bandlink"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="link">Link for info / tickets: </label>
          <input
            type="text"
            id="link"
            name="link"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="desc">Description (e.g. musicians): </label>
          <input
            type="text"
            id="desc"
            name="desc"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="public">Public?</label>
          <input
            type="checkbox"
            id="public"
            name="public"
            checked={isChecked}
            onChange={handleCheckboxChange}
          ></input>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Add Gig
        </button>
      </form>
    </MuiPickersUtilsProvider>
  );
}

export default App;
