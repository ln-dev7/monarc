import React from "react";

export default function Main() {
  return (
    <div>
      <div class="main one">
        <div class="main__container">
          <div class="main-image">
            <img src="assets/Rectangle 14.png" alt="image" />
          </div>
          <div class="main-text">
            <h2>Create a video-call</h2>
            <p>
              If face-to-face communication is simpler, make a one-click voice
              or video call. <br />
              You can start a Video call session here an share the link.
            </p>
            <ul>
              <li>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L6.33333 8.83333L9 6.16667M13 7.5C13 8.28793 12.8448 9.06815 12.5433 9.7961C12.2417 10.5241 11.7998 11.1855 11.2426 11.7426C10.6855 12.2998 10.0241 12.7417 9.2961 13.0433C8.56815 13.3448 7.78793 13.5 7 13.5C6.21207 13.5 5.43185 13.3448 4.7039 13.0433C3.97595 12.7417 3.31451 12.2998 2.75736 11.7426C2.20021 11.1855 1.75825 10.5241 1.45672 9.7961C1.15519 9.06815 1 8.28793 1 7.5C1 5.9087 1.63214 4.38258 2.75736 3.25736C3.88258 2.13214 5.4087 1.5 7 1.5C8.5913 1.5 10.1174 2.13214 11.2426 3.25736C12.3679 4.38258 13 5.9087 13 7.5Z"
                    stroke="#F05252"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Select and copy this to share it!</span>
              </li>
              <li>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L6.33333 8.83333L9 6.16667M13 7.5C13 8.28793 12.8448 9.06815 12.5433 9.7961C12.2417 10.5241 11.7998 11.1855 11.2426 11.7426C10.6855 12.2998 10.0241 12.7417 9.2961 13.0433C8.56815 13.3448 7.78793 13.5 7 13.5C6.21207 13.5 5.43185 13.3448 4.7039 13.0433C3.97595 12.7417 3.31451 12.2998 2.75736 11.7426C2.20021 11.1855 1.75825 10.5241 1.45672 9.7961C1.15519 9.06815 1 8.28793 1 7.5C1 5.9087 1.63214 4.38258 2.75736 3.25736C3.88258 2.13214 5.4087 1.5 7 1.5C8.5913 1.5 10.1174 2.13214 11.2426 3.25736C12.3679 4.38258 13 5.9087 13 7.5Z"
                    stroke="#F05252"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Share link with your friends or anymore</span>
              </li>
            </ul>
            <input
              type="text"
              placeholder="https://monarc.app/c/OBddKuH1610554518009"
            />
            <button>Start the call</button>
          </div>
        </div>
      </div>
      <div class="main two">
        <div class="main__container">
          <div class="main-text">
            <h2>Gaming Controller</h2>
            <p>
              Create a game group session and enjoy the moment with your
              friends.
              <br />
              <br />
              <span>This module will be available next week !</span>
            </p>
            <button>More know about it</button>
          </div>
          <div class="main-image">
            <img src="assets/Rectangle 16.png" alt="image" />
          </div>
        </div>
      </div>
      <div class="main three">
        <img
          src="assets/Group 20.png"
          alt="illustrattion"
          class="main-3-illus"
        />
        <div class="main__container">
          <div class="main-image">
            <img src="assets/Rectangle 14 (1).png" alt="image" />
          </div>
          <div class="main-text">
            <h2>Circus Tent</h2>
            <p>
              Create a room cinema session and watch a movie/film/serie with
              your friends.
              <br />
              <br />
              <span>This module will be available next week !</span>
            </p>
            <button>More know about it</button>
          </div>
        </div>
      </div>
    </div>
  );
}
