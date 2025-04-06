const EnquiryForm = () => {
  return (
    <>
      <div className="enquiry-form">
        <h3>For More Information </h3>
        <div>
          <label>Name</label>
          <input type="text" name="Name" id="Name"></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="Email" id="Email"></input>
        </div>
        <div>
          <label>Subject</label>
          <input type="text" name="Subject" id="Subject"></input>
        </div>
        <div>
          <label>Message</label>
          <textarea type="text" name="Message" id="Message"></textarea>
        </div>
      </div>
    </>
  );
};
export default EnquiryForm;
