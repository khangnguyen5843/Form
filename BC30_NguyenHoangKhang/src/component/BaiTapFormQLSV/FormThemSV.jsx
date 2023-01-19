import React, { Component } from "react";
import { connect } from "react-redux";

class FormThemSV extends Component {
  state = {
    values: {
      id: "",
      fullName: "",
      phoneNumber: "",
      email: ""
    },
    errors: {
      id: "",
      fullName: "",
      phoneNumber: "",
      email: ""
    }
  };

  handleChange = (e) => {
    // If the value input content changed when users type in every time, get that value
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;

    // Check validation:
    let errMessage = '';

    // + Check empty error:
    if(value.trim() === ''){
      errMessage = name + " is required!"
    }

    // + Check email type:
    if(type === 'email' || type === 'text'){
      const regex = new RegExp(pattern);
      if (!regex.test(value)){
        errMessage = name + " is not in the correct format!"
      }
    }

    let values = {...this.state.values,[name]:value}; //Update new values for state
    let errors = {...this.state.errors,[name]:errMessage}; //Update errors for state

    this.setState(
      {
        ...this.state,
        values:values,
        errors:errors
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); //Prevent reloading page of browser when clicking button "Thêm sinh viên"
    this.props.addStudent(this.state.values);
  };

  checkValid = () => {
    let valid = true; //No error
    for(let key in this.state.errors){
      if(this.state.errors[key] !== '' || this.state.values[key] === ''){ //Content errMessage apprears or empty input
        valid = false;
      }
    }
    if(valid){
      return <button type="submit" className="btn btn-success">
      Thêm sinh viên</button>
    }
    return <button type="submit" disabled className="btn btn-success">
    Thêm sinh viên</button>
  }

  render() {
    return (
      <div className="container mb-4">
        <div className="card text-start">
          <div className="card-header bg-dark text-white">
            <h3>Thông Tin Sinh Viên</h3>
          </div>
          <div className="card-body">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="row mb-3">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    type="text"
                    name="id"
                    value={this.state.values.id}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.id}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    type="text"
                    name="fullName"
                    pattern="^[a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$"
                    value={this.state.values.fullName}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.fullName}</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    type="text"
                    name="phoneNumber"
                    pattern="[0-9,+,()]+$"
                    value={this.state.values.phoneNumber}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.phoneNumber}</p>
                </div>
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                    {this.checkValid()}
                    
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => {
      const action = {
        type: "ADD_STUDENT",
        student,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormThemSV);
