import React from "react";

export default function Join() {
  return (
    <div class="join">
      <div class="join__container">
        <p>
          Join our newsletter to be the first to know about the availability of
          current features and the addition of new ones.
        </p>
        <div class="join-subscribe">
          <input type="text" placeholder="Enter your email address" />
          <button>
            <span>Sign up</span>
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 5.99518C14.4951 5.46908 14.2832 4.96608 13.91 4.59518L9.62 0.295187C9.43264 0.108936 9.17919 0.00439453 8.915 0.00439453C8.65081 0.00439453 8.39736 0.108936 8.21 0.295187C8.11627 0.38815 8.04188 0.498751 7.99111 0.62061C7.94034 0.742469 7.9142 0.873175 7.9142 1.00519C7.9142 1.1372 7.94034 1.2679 7.99111 1.38976C8.04188 1.51162 8.11627 1.62222 8.21 1.71519L11.5 4.99518H1.5C1.23478 4.99518 0.98043 5.10054 0.792893 5.28807C0.605357 5.47561 0.5 5.72996 0.5 5.99518C0.5 6.2604 0.605357 6.51475 0.792893 6.70229C0.98043 6.88982 1.23478 6.99518 1.5 6.99518H11.5L8.21 10.2852C8.0217 10.4722 7.91538 10.7263 7.91444 10.9916C7.91351 11.257 8.01802 11.5119 8.205 11.7002C8.39198 11.8885 8.6461 11.9948 8.91146 11.9957C9.17683 11.9967 9.4317 11.8922 9.62 11.7052L13.91 7.40518C14.2856 7.03183 14.4978 6.52476 14.5 5.99518Z"
                fill="#DC2626"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
