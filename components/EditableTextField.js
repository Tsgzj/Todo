import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

export class EditableTextField extends React.Component {
    state = {
    value:  "not null",
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
      const { classes, title, value } = this.props;
    return (
            <TextField
        name={title}
        value={value}
          margin="dense"
          error={this.state.value === ""}
          onChange={this.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={this.handleClick}>
                  <Edit />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
    );
  }
}

export class EditableMultiLineTextField extends React.Component {
    state = {
    value:  "not null",
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
      const { classes, title, value, row } = this.props;
    return (
            <TextField
        name={title}
        value={value}
        multiline
        fullWidth
        rows={row}
          error={this.state.value === ""}
          onChange={this.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={this.handleClick}>
                  <Edit />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
    );
  }
}
