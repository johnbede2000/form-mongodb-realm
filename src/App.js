import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <form>
        <div>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </div>
        <div>
          <label htmlFor="venuename">Venue Name: </label>
          <input type="text" id="venuename" name="venuename"></input>
        </div>
        <div>
          <label htmlFor="bandname">Band Name: </label>
          <input type="text" id="bandename" name="bandname"></input>
        </div>
        <div>
          <label htmlFor="bandlink">Band Link: </label>
          <input type="text" id="bandlink" name="bandlink"></input>
        </div>
        <div>
          <label htmlFor="city">Venue Name: </label>
          <input type="text" id="city" name="city"></input>
        </div>

        <div>
          <label htmlFor="link">Link for info / tickets: </label>
          <input type="text" id="link" name="link"></input>
        </div>
        <div>
          <label htmlFor="desc">Description (e.g. musicians): </label>
          <input type="text" id="desc" name="desc"></input>
        </div>
        <div>
          <label htmlFor="public">Public?</label>
          <input type="checkbox" id="public" name="public"></input>
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </MuiPickersUtilsProvider>
  );
}

export default App;
