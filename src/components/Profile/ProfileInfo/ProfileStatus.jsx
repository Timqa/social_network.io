import React from 'react';

import style from './ProfileStatus.module.css';

export class ProfileStatus extends React.Component {
  state = {
    isEditMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  checkModeSpan = () => {
    this.setState({
      isEditMode: !this.state.isEditMode
    })
  }

  checkModeInput = () => {
    this.checkModeSpan()
    this.props.onUpdateUserStatus(this.state.status)
  }


  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <>
        {
          !this.state.isEditMode
            ?
            <div>
              <span onDoubleClick={this.checkModeSpan} className={style.status}>{this.state.status || "Здесь может быть статус"}</span>
            </div>
            :
            <div>
              <input
                autoFocus={true}
                onBlur={
                  this.checkModeInput
                }
                onChange={this.onStatusChange}
                value={this.state.status}/>
            </div>
        }
      </>
    );
  }
}
