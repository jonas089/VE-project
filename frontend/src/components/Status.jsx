import React from "react";
export default class Status extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div class="w-11/12 lg:w-2/6 mx-auto">
                <div class="flex justify-between items-center pb-2 flex-col">
                    <p class="text-xs text-indigo-700 dark:text-indigo-400 font-bold">{this.props.status}</p>
                </div>
                <div class="flex items-center">
                    <div class="w-1/2 bg-gray-200 dark:bg-gray-700 h-1 mr-1 relative">
                        <div class={"h-1 w-" + this.props.p2 + "/6 bg-indigo-700"}></div>
                    </div>
                    <div class="w-1/2 bg-gray-200 dark:bg-gray-700 h-1 rounded-tr rounded-br">
                      <div class={"h-1 w-" + this.props.p3 + "/6 bg-indigo-700"}></div>
                    </div>
                </div>
          </div>
      </div>
    );
  }
}
