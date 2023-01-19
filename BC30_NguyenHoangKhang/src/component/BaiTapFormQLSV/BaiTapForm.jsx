import React, { Component } from 'react'
import FormThemSV from './FormThemSV'
import TableSV from './TableSV'

export default class BaiTapForm extends Component {
  render() {
    return (
      <div className='container py-3'>
        <h3 className='text-center'>Bài tập Form QLSV - ReactJS Redux</h3>
        <FormThemSV/>
        <TableSV/>
      </div>
    )
  }
}
