import { React, useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    notification:""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  // console.log(formData);
  return (
    <div className="App">
      <h2>Registration form</h2>

      <form onSubmit={submitHandler}>
        {/* first Name */}
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Suraj"
          onChange={changeHandler}
          value={formData.firstName}
        ></input>
        <br />

        {/* Last Name */}
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          placeholder="kumar"
          id="lastName"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />

        {/* email */}
        <label htmlFor="email">Email Address: </label>
        <input
          placeholder="suraj123@gmail.com"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          id="email"
        />
        <br />

        {/* country */}
        <label htmlFor="country">Country: </label>
        <select
          name="country"
          // placeholder="please select"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option value="india">India</option>
          <option value="srilanka">Sri Lanka</option>
          <option value="nepal">Nepal</option>
          <option value="bhutan">Bhutan</option>
          <option value="russia">Russia</option>
        </select>
        <br />

        {/* Address */}
        <label htmlFor="address">Street Address: </label>
        <input
          type="text"
          name="address"
          placeholder="1234 Gangaram"
          id="address"
          value={formData.address}
          onChange={changeHandler}
        ></input>
        <br />

        {/* City */}
        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          placeholder="Greater Noida"
          id="city"
          value={formData.city}
          onChange={changeHandler}
        ></input>
        <br />

        {/* State */}
        <label htmlFor="state">State / Province: </label>
        <input
          type="text"
          name="state"
          placeholder="Uttar Pradesh"
          id="state"
          value={formData.state}
          onChange={changeHandler}
        ></input>
        <br />

        {/* Zip */}
        <label htmlFor="zip">ZIP / Postal code: </label>
        <input
          type="text"
          name="zip"
          placeholder="201310"
          id="zip"
          value={formData.zip}
          onChange={changeHandler}
        ></input>
        <br />

        {/* By email - comments */}
        <h4>By Email</h4>
        <p>
          <input
            type="checkbox"
            name="comments"
            checked={formData.comments}
            onChange={changeHandler}
          ></input>
          <b>
            <label htmlFor="comments">Comments: </label>
          </b>
          Get notified when someone posts a comments on a posting
        </p>

        {/* By email - candidates */}
        <p>
          <input
            type="checkbox"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
          ></input>
          <b>
            <label htmlFor="candidates">Candidates: </label>
          </b>
          Get notified when a candidate applies for a job.
        </p>

        {/* By email - offers */}
        <p>
          <input
            type="checkbox"
            name="offers"
            checked={formData.offers}
            onChange={changeHandler}
          ></input>
          <b>
            <label htmlFor="offers">Offers: </label>
          </b>
          Get notified when a candidate accepts or rejects an offer.
        </p>
        <br />

        {/* Push Notifications */}
        <b><label htmlFor="offers">Push Notifications</label></b>
        <p>These are delivered via SMS to uour mobile phone.</p>
        
        {/* Push Notification - Everything */}
        <input
        type="radio"
        name="notification"
        value="Everything"
        id="everything"
        onChange={changeHandler}
        checked={formData.notification === "Everything"}
        />
        <label htmlFor="everything">Everything</label><br/>

        {/* Push Notification - Same as Email */}
        <input
        type="radio"
        name="notification"
        value="sameasemail"
        id="sameasemail"
        onChange={changeHandler}
        checked={formData.notification === "same as email"}
        />
        <label htmlFor="sameasemail">Same as email</label><br></br>

        {/* Push Notification - NO notifications */}
        <input
        type="radio"
        name="notification"
        value="nothing"
        id="nothing"
        onChange={changeHandler}
        checked={formData.notification === "No Push Notifications"}
        />
        <label htmlFor="nothing">No Push Notifications</label><br/><br/>

        

        {/* Submit */}
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
