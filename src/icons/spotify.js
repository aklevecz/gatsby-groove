import React from "react"
import SVG from "react-inlinesvg"
import greenSpotify from "./spotify.svg"
import spotifyStyles from "./spotify.module.scss"
const Spotify = ({ stroke = "#000000" }) => {
  const spotAuth = () => {
    var scopes =
      "streaming user-read-email user-read-private user-modify-playback-state user-read-playback-state"
    var redirect_uri = process.env.GATSBY_REDIRECT_URI
    window &&
      window.open(
        "https://accounts.spotify.com/authorize" +
          "?response_type=code" +
          "&client_id=" +
          process.env.GATSBY_SPOTIFY_CLIENT_ID +
          "&scope=" +
          encodeURIComponent(scopes) +
          "&redirect_uri=" +
          encodeURIComponent(redirect_uri),
        "login-popup",
        "width=500, height=400"
      )
  }
  return (
    <div
      role="button"
      tabIndex={-2}
      onKeyDown={spotAuth}
      onClick={spotAuth}
      className={spotifyStyles.container}
    >
      <SVG src={greenSpotify} />
    </div>
  )
  return (
    <div
      role="button"
      tabIndex={-2}
      onKeyDown={spotAuth}
      onClick={spotAuth}
      className={spotifyStyles.container}
    >
      <svg viewBox="0 0 31 31.3">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="none"
          stroke={stroke}
          strokeMiterlimit="10"
          d="M21.3,14.6
	c-3.1-1.8-8.1-2-11.1-1.1c-0.5,0.1-1-0.1-1.1-0.6c-0.1-0.5,0.1-1,0.6-1.1c3.4-1,9-0.8,12.5,1.3c0.4,0.3,0.6,0.8,0.3,1.2
	C22.2,14.8,21.7,14.9,21.3,14.6z M21.2,17.3c-0.2,0.3-0.7,0.5-1,0.2c-2.6-1.6-6.5-2-9.5-1.1c-0.4,0.1-0.8-0.1-0.9-0.5
	c-0.1-0.4,0.1-0.8,0.5-0.9c3.5-1,7.8-0.5,10.7,1.3C21.3,16.5,21.4,17,21.2,17.3z M20,19.9c-0.2,0.3-0.5,0.4-0.8,0.2
	c-2.2-1.4-5.1-1.7-8.4-0.9c-0.3,0.1-0.6-0.1-0.7-0.4c-0.1-0.3,0.1-0.6,0.4-0.7c3.6-0.8,6.7-0.5,9.2,1.1C20.1,19.3,20.2,19.7,20,19.9
	z M15.6,6.2c-5.3,0-9.5,4.3-9.5,9.5c0,5.3,4.3,9.5,9.5,9.5c5.3,0,9.5-4.3,9.5-9.5C25.2,10.5,20.9,6.2,15.6,6.2z"
        />
        <g>
          <path
            d="M13.8,4.3c-0.5,0.1-1.1,0-1.6-0.3l0.4-0.6c0.4,0.2,0.7,0.3,1.1,0.3c0.3,0,0.5-0.2,0.4-0.4l0,0C14.1,3,14,3,13.4,2.9
		c-0.7-0.1-1.2-0.2-1.3-0.9l0,0c-0.1-0.6,0.3-1.1,1-1.2c0.5-0.1,1,0,1.4,0.2l-0.3,0.6c-0.3-0.2-0.7-0.2-1-0.2
		c-0.3,0-0.4,0.2-0.4,0.4l0,0c0,0.2,0.2,0.3,0.8,0.3c0.7,0.1,1.2,0.3,1.3,0.9l0,0C15,3.7,14.6,4.2,13.8,4.3z"
          />
          <path d="M17,1.5l0.8,0.1l-0.4,2.7l-0.8-0.1L17,1.5z M17.1,0.6l0.8,0.1l-0.1,0.7l-0.8-0.1L17.1,0.6z" />
          <path
            d="M19.8,5.9c-0.4-0.2-0.7-0.4-1-0.8l0.5-0.4c0.2,0.3,0.4,0.5,0.7,0.6c0.5,0.2,0.8,0.1,1-0.3l0.1-0.1c-0.3,0.1-0.6,0.2-1,0
		c-0.6-0.3-0.9-0.9-0.6-1.6l0,0c0.3-0.7,1-0.9,1.6-0.6c0.4,0.2,0.5,0.4,0.6,0.7L22,3l0.7,0.3l-0.9,1.9C21.4,6.1,20.7,6.3,19.8,5.9z
		 M21.1,3.3c-0.3-0.2-0.7,0-0.8,0.3l0,0c-0.2,0.3,0,0.7,0.3,0.8c0.3,0.2,0.7,0,0.9-0.3l0,0C21.6,3.8,21.5,3.4,21.1,3.3z"
          />
          <path
            d="M25.1,6.9c0.3-0.3,0.3-0.5,0.1-0.7C25,6,24.7,6,24.4,6.2l-1.1,1l-0.5-0.5l1.9-1.9l0.5,0.5L25,5.6c0.3,0,0.6,0,0.9,0.3
		c0.4,0.4,0.4,0.9-0.1,1.3l-1.2,1.2L24,7.9L25.1,6.9z"
          />
          <path d="M29,11.4l0.2,0.7l-2.6,0.7l-0.2-0.7L29,11.4z M30,11.2l0.2,0.8l-0.6,0.2l-0.2-0.8L30,11.2z" />
          <path
            d="M28.5,16.3c0.4,0,0.5-0.2,0.6-0.5c0-0.3-0.2-0.5-0.5-0.5l-1.5,0l0-0.8l2.7,0l0,0.8l-0.4,0c0.2,0.2,0.4,0.4,0.4,0.8
		c0,0.6-0.4,0.9-1,0.9L27,17l0-0.8L28.5,16.3z"
          />
          <path d="M24,23.5l2.3,0.8l-1.3-2l0.4-0.5l3.5,1.3l-0.5,0.6L26,22.8l1.4,2.1L27,25.4l-2.3-0.9l1.4,2l-0.5,0.6l-2-3.1L24,23.5z" />
          <path d="M22.8,27.9l-0.7,0.4L20.8,26l0.7-0.4L22.8,27.9z M23.3,28.7l-0.7,0.4l-0.3-0.6l0.7-0.4L23.3,28.7z" />
          <path
            d="M18.4,26.8c0.4-0.1,0.8,0,1,0.6l0.3,1.2l0.3-0.1l0.2,0.6l-0.3,0.1l0.2,0.7l-0.7,0.2l-0.2-0.7l-0.6,0.2L18.3,29l0.6-0.2
		l-0.3-1.1c0-0.2-0.1-0.2-0.3-0.2c-0.1,0-0.2,0.1-0.3,0.2l-0.2-0.6C18,27,18.1,26.9,18.4,26.8z"
          />
          <path
            d="M14.6,28.7c0,0.4,0.1,0.6,0.4,0.6c0.3,0,0.5-0.2,0.5-0.5l0.1-1.5l0.8,0l-0.2,3.6l-0.8,0l0.1-1.3c-0.2,0.2-0.4,0.4-0.8,0.4
		c-0.6,0-0.9-0.4-0.9-1l0.1-1.7l0.8,0L14.6,28.7z"
          />
          <path
            d="M8.9,25c0.4,0.3,0.8,0.8,0.9,1.3l-0.7,0.2c-0.1-0.4-0.3-0.7-0.6-1c-0.3-0.2-0.5-0.2-0.6,0l0,0c-0.1,0.2-0.1,0.3,0.3,0.8
		c0.5,0.6,0.7,1,0.3,1.5l0,0c-0.4,0.5-1,0.6-1.6,0.1c-0.4-0.3-0.7-0.7-0.8-1.1l0.7-0.2c0.1,0.4,0.3,0.6,0.5,0.8
		c0.2,0.2,0.4,0.2,0.5,0l0,0c0.1-0.2,0.1-0.3-0.3-0.8c-0.5-0.6-0.6-1-0.3-1.5l0,0C7.7,24.6,8.3,24.6,8.9,25z"
          />
          <path
            d="M6,21.9c0.2,0.3,0.2,0.6,0.1,0.9l1-0.6l0.4,0.6l-2.9,1.9l-0.4-0.6l0.3-0.2c-0.3,0-0.6-0.1-0.8-0.5
		c-0.3-0.5-0.3-1.3,0.5-1.8l0,0C4.9,21.1,5.6,21.4,6,21.9z M4.3,23.2c0.2,0.3,0.6,0.4,1,0.1l0,0c0.4-0.2,0.5-0.7,0.3-1
		c-0.2-0.3-0.6-0.4-1-0.1l0,0C4.2,22.5,4.1,22.9,4.3,23.2z"
          />
          <path
            d="M4.5,18.2c0.2,0.8-0.3,1.5-1,1.7l0,0c-0.8,0.2-1.5-0.3-1.7-1.1c-0.2-0.8,0.3-1.5,1-1.7l0,0C3.6,16.9,4.3,17.4,4.5,18.2z
		 M2.4,18.7c0.1,0.4,0.5,0.6,0.9,0.5l0,0c0.4-0.1,0.7-0.4,0.6-0.8c-0.1-0.4-0.5-0.6-0.9-0.5l0,0C2.6,17.9,2.3,18.3,2.4,18.7z"
          />
          <path
            d="M4.3,14.4c0,0.5-0.3,0.8-0.9,0.7L2.1,15l0,0.3l-0.6-0.1l0-0.3l-0.7-0.1l0.1-0.8l0.7,0.1l0.1-0.6l0.6,0.1l-0.1,0.6l1.1,0.1
		c0.2,0,0.3-0.1,0.3-0.2c0-0.1,0-0.3-0.1-0.4l0.6,0.1C4.2,14,4.3,14.1,4.3,14.4z"
          />
          <path d="M1.2,11.1l0.3-0.8l0.6,0.2l-0.3,0.8L1.2,11.1z M2.1,11.4l0.2-0.7l2.5,0.9l-0.2,0.7L2.1,11.4z" />
          <path
            d="M3.7,7.4C3.6,7.5,3.6,7.6,3.8,7.7l0.1,0.1l0.3-0.5l0.5,0.3L4.4,8.1l1.7,1.1L5.7,9.9L4,8.8L3.8,9L3.3,8.7l0.2-0.3L3.3,8.3
		C2.8,8,2.8,7.6,3,7.2C3.2,7,3.3,6.9,3.4,6.8l0.5,0.3C3.8,7.2,3.8,7.2,3.7,7.4z"
          />
          <path
            d="M8.3,7.8C8.1,8,7.9,8.1,7.7,8.1L7.5,7.5c0.1,0,0.2-0.1,0.3-0.1C8,7.3,8,7.3,7.9,7.1L5.4,5.7L6,5.2l1.6,1L6.9,4.4l0.6-0.5
		l1,2.8C8.7,7.2,8.7,7.5,8.3,7.8z"
          />
        </g>
        <ellipse
          fillRule="evenodd"
          clipRule="evenodd"
          fill="none"
          stroke={stroke}
          strokeMiterlimit="10"
          cx="15.6"
          cy="15.7"
          rx="9.4"
          ry="9.6"
        />
      </svg>
    </div>
  )
}
export default Spotify
