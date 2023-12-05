import React from "react";
import Loading from "./shimmer";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        issues: {
          data: [],
        },
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/support/issues/legal"
    );
    const json = await data.json();

    for (let i = 0; i < json.data.issues.data.length; i++) {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          issues: {
            ...prevState.data.issues,
            data: [
              ...prevState.data.issues.data,
              {
                title: json.data.issues.data[i].title,
                description: json.data.issues.data[i].description,
              },
            ],
          },
        },
      }));
    }
  }

  render() {
    return this.state.data.issues.data.length > 0 ? (
      this.state.data.issues.data.map((about,index) => (
        <div key={index} className="container my-5">
          <h4>{about.title}</h4>
          <p>{about.description}</p>
        </div>
      ))
    ) : (
      <Loading />
    );
  }
}

export default Users;
