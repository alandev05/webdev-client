export default function YourForm() {
  return (
    <>
      <h4 id="wd-your-form-heading">Student Profile</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="wd-your-first-name">First name: </label>
        <input
          type="text"
          id="wd-your-first-name"
          defaultValue="Alan"
          placeholder="First name"
        />
        <br />
        <label htmlFor="wd-your-last-name">Last name: </label>
        <input
          type="text"
          id="wd-your-last-name"
          defaultValue="Nguyen"
          placeholder="Last name"
        />
        <br />
        <label htmlFor="wd-your-student-id">Student ID: </label>
        <input
          type="password"
          id="wd-your-student-id"
          placeholder="9-digit NUID"
        />
        <br />

        <label htmlFor="wd-your-bio">Why I am taking this course: </label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={50}
          rows={4}
          defaultValue="I'm taking this course to better understand the web"
        />
        <br />

        <label>Class standing:</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-standing-freshman" />
        <label htmlFor="wd-your-standing-freshman">Freshman</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-standing-sophomore" />
        <label htmlFor="wd-your-standing-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-standing-junior" />
        <label htmlFor="wd-your-standing-junior">Junior</label>
        <br />
        <input
          type="radio"
          name="your-standing"
          id="wd-your-standing-senior"
          defaultChecked
        />
        <label htmlFor="wd-your-standing-senior">Senior</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-standing-graduate" />
        <label htmlFor="wd-your-standing-graduate">Graduate</label>
        <br />
        <label>Living situation:</label>
        <br />
        <input type="radio" name="your-housing" id="wd-your-housing-campus" />
        <label htmlFor="wd-your-housing-campus">On-campus</label>
        <br />
        <input
          type="radio"
          name="your-housing"
          id="wd-your-housing-commuter"
          defaultChecked
        />
        <label htmlFor="wd-your-housing-commuter">Commuter</label>
        <br />

        <label>Interests:</label>
        <br />
        <input
          type="checkbox"
          name="your-interests"
          id="wd-your-interest-pv"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-pv">Pole Vault</label>
        <br />
        <input
          type="checkbox"
          name="your-interests"
          id="wd-your-interest-cpp"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-cpp">C++</label>
        <br />
        <input 
            type="checkbox" 
            name="your-interests" 
            id="wd-your-interest-swe" 
            defaultChecked
        />
        <label htmlFor="wd-your-interest-swe">Software Engineering</label>
        <br />
        <br />

        <label htmlFor="wd-your-major">Major: </label>
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">Topics to deepen this term: </label>
        <br />
        <select
          id="wd-your-topics"
          multiple
          defaultValue={["LS", "IR"]}
        >
          <option value="HTML">HTML and CSS</option>
          <option value="REACT">React</option>
          <option value="LS">Language Systems in programming languages</option>
          <option value="IR">Information Retrieval</option>
        </select>
        <br />

        <h5>Other field types</h5>
        <label htmlFor="wd-your-email">School email: </label>
        <input
          type="email"
          id="wd-your-email"
          placeholder="nguyen.a@northeastern.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
        <input
          type="number"
          id="wd-your-grad-year"
          defaultValue="2027"
          min={2026}
          max={2032}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input
          type="date"
          id="wd-your-start-date"
          defaultValue="2023-09-06"
          min="2015-01-01"
          max="2026-12-31"
        />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited I am about this course (0 to 10):{" "}
        </label>
        <input
          type="range"
          id="wd-your-excitement"
          defaultValue="8"
          min="0"
          max="10"
        />
        <br />

        <h5>Buttons</h5>
        <button id="wd-your-button-save" type="submit">
          Save
        </button>
        <button id="wd-your-button-cancel" type="button">
          Cancel
        </button>
      </form>
    </>
  );
}
