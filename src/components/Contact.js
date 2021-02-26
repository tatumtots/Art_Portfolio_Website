function Contact() {
    return (
      <div className='container'>
        <img src='/assets/images/nebulashore.png' alt='Photo' />
        <form>
          <label for='name'>
            {" "}
            Name:
            <input type='text' name='name' placeholder='Your Name'></input>
          </label>
          <label for='name'>
            Email:
            <input type='text' name='email' placeholder='Email'></input>
          </label>
          <label for='name'>
            Message:
            <input
              type='textarea'
              name='message'
              placeholder='Your Message'
            ></input>
          </label>
        </form>
      </div>
    )
}

export default Contact;