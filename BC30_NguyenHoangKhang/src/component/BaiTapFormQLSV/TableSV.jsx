import React, { Component } from "react";
import { connect } from "react-redux";

class TableSV extends Component {

    renderStudent = () => {
        const {arrStudent} = this.props;
        return arrStudent.map((SV, index) => {
            return (
                <tr key={index}>
                    <td>{SV.id}</td>
                    <td>{SV.fullName}</td>
                    <td>{SV.phoneNumber}</td>
                    <td>{SV.email}</td>
                </tr>
            )
        })
    }

  render() {
    console.log(this.props.arrStudent);

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.renderStudent()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrStudent: state.QLSVReducer.arrStudent,
  };
};

export default connect(mapStateToProps, null)(TableSV);
