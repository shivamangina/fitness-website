import React, { Component } from 'react';

export default class Contact extends Component {
  state = {
    fname: '',
    subject: '',
    message: '',
  };

  submitMessage = (e) => {
    e.preventDefault();
    console.log('successfully submitted the message: ', this.state);
    const number = '919564073380';

    const text = `Hi%20Dipan%2C%0AI%20am%20${encodeURI(this.state.fname)}%20%0Asub%3A%20${encodeURI(this.state.subject)}%2C%0Amessage%3A${encodeURI(this.state.message)}`;

    const url = `https://api.whatsapp.com/send?phone=
    ${number}&text=${text}`;
    window.open(url);

    this.setState({
      fname: '',
      subject: '',
      message: '',
    });
  };
  render() {
    return (
      <div class="py-10 bg-white md:py-16 tails-selected-element">
        <div class="px-10 mx-auto max-w-7xl md:px-16">
          <div class="max-w-3xl mx-auto mb-10 md:mb-16">
            <p class="text-xs font-bold text-blue-500 uppercase">Contact Us</p>
            <h2 class="mt-1 text-2xl font-bold text-left text-gray-800 lg:text-3xl md:mt-2">Need to ask us a question?</h2>
            
          </div>
          <form class="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
            <div>
              <label for="first-name" class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">
                Name
              </label>
              <input
                onChange={(e) => {
                  this.setState({ fname: e.target.value });
                }}
                name="first-name"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                value={this.state.fname}
              />
            </div>

            <div class="sm:col-span-2">
              <label for="subject" class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">
                Subject
              </label>
              <input
                onChange={(e) => {
                  this.setState({ subject: e.target.value });
                }}
                name="subject"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                value={this.state.subject}
              />
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">
                Message
              </label>
              <textarea
                onChange={(e) => {
                  this.setState({ message: e.target.value });
                }}
                name="message"
                class="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                value={this.state.message}></textarea>
            </div>

            <div class="flex items-center justify-between sm:col-span-2">
              <button
                onClick={this.submitMessage}
                class="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-600 rounded-md outline-none hover:bg-blue-500 active:bg-blue-700 ring-blue-300 md:text-base">
                Send Message
              </button>
            </div>
          </form>
        
        </div>
      </div>
    );
  }
}
