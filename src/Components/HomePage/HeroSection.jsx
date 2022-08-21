import React from 'react'

export default function HeroSection() {
  return (
    <div class="hero">
        <img src="assets/desktop-pattern 3.png" alt="illustrattion" class="hero-illus" />
        <div class="hero__container">
        <div class="hero-text">
            <h1>
            Welcome to MONARC, the video-call app for friend, where you can play
            games in a video-call, watch a movie together and have more fun !
            </h1>
            <p>
            You can create your own custom session by selecting the service!
            </p>
            <div>
            <button>
                <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M0 2.16667C0 1.72464 0.210714 1.30072 0.585786 0.988155C0.960859 0.675595 1.46957 0.5 2 0.5H8C8.53043 0.5 9.03914 0.675595 9.41421 0.988155C9.78929 1.30072 10 1.72464 10 2.16667V8.83333C10 9.27536 9.78929 9.69928 9.41421 10.0118C9.03914 10.3244 8.53043 10.5 8 10.5H2C1.46957 10.5 0.960859 10.3244 0.585786 10.0118C0.210714 9.69928 0 9.27536 0 8.83333V2.16667ZM12.553 3.08833C12.3869 3.15749 12.2472 3.26382 12.1496 3.39539C12.0519 3.52697 12.0001 3.67862 12 3.83333V7.16667C12.0001 7.32138 12.0519 7.47303 12.1496 7.6046C12.2472 7.73618 12.3869 7.84251 12.553 7.91167L14.553 8.745C14.7054 8.80847 14.8748 8.83843 15.045 8.83204C15.2152 8.82565 15.3806 8.78313 15.5256 8.7085C15.6706 8.63386 15.7902 8.5296 15.8733 8.40561C15.9563 8.28161 15.9999 8.14199 16 8V3C15.9999 2.85801 15.9563 2.71839 15.8733 2.59439C15.7902 2.4704 15.6706 2.36614 15.5256 2.2915C15.3806 2.21687 15.2152 2.17434 15.045 2.16796C14.8748 2.16157 14.7054 2.19153 14.553 2.255L12.553 3.08833Z"
                    fill="white"
                />
                </svg>
                <span>Start a meeting</span>
            </button>
            <button>
                <span>Become a Sponsor</span>
            </button>
            </div>
        </div>
        <div class="hero-image">
            <img src="assets/HeroSection.png" alt="hero-image" />
        </div>
        </div>
    </div>
  )
}
