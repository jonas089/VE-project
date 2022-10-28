import React from "react";
export default class Status extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let color = 'green';
    if (this.props.status == 'Casper Signer is Locked'){
      color = 'red';
    }
    return(
      <div class="mx-auto bg-gradient-to-l from-indigo-400 to-red-700">
        <div class="flex items-center justify-center px-4 sm:px-0">
          <div role="alert" id="alert" class={"lg:w-10/12 transition duration-150 ease-in-out bg-" + color + "-500 shadow rounded-md md:flex justify-between items-center top-0 mt-12 mb-8 py-4 px-4"}>
            <div class="sm:flex items-center">
              <div class="flex items-end">
                <div class="mr-2 mt-0.5 sm:mt-0 text-red-800">
                  <img class="focus:outline-none" src="https://www.simpleimageresizer.com/_uploads/photos/9aac2696/VE_mark_1_22x22.png" alt="VE" />
                </div>
                  <p class="mr-2 text-base font-bold text-black">Connection Status</p>
                </div>
                <div class="h-1 w-1 bg-red-800 rounded-full mr-2 hidden xl:block"></div>
                   <p class="text-base text-gray-800">{this.props.status}</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
