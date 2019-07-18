import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const SSButton = props => (
  <a href={props.linkTarget} className="silver-swan-button-link">
    <div className="silver-swan-button">{props.linkText}</div>
  </a>
)

var buttonElement = document.getElementById('silver-swan-button');
var buttonElementDesktop = document.getElementById('silver-swan-button-desktop');

if (buttonElement) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <SSButton linkTarget={buttonElement.dataset.linktarget} linkText={buttonElement.dataset.linktext} />,
      buttonElement.appendChild(document.createElement('div')),
    )
  })
}

if (buttonElementDesktop) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <SSButton linkTarget={buttonElementDesktop.dataset.linktarget} linkText={buttonElementDesktop.dataset.linktext} />,
      buttonElementDesktop.appendChild(document.createElement('div')),
    )
  })
}
