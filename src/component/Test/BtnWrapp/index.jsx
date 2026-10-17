import React, { Component } from "react";
import { GrLike } from "react-icons/gr";

import { MdOutlineDeleteOutline } from "react-icons/md";
import IconBtnWrapper from "./BtnWrapp";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <IconBtnWrapper>
          <GrLike />
        </IconBtnWrapper>

        <IconBtnWrapper>
          <MdOutlineDeleteOutline />
        </IconBtnWrapper>
      </>
    );
  }
}
