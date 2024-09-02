const Message = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 272 211"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.4 181.445L23.12 207.528C18.8134 211.119 13.8811 211.925 8.32322 209.944C2.76535 207.963 -0.00904451 204.417 2.21498e-05 199.307V22.6807C2.21498e-05 16.4435 2.66562 11.106 7.99682 6.66812C13.328 2.23027 19.7291 0.00756023 27.2 0H244.8C252.28 0 258.686 2.22271 264.017 6.66812C269.348 11.1135 272.009 16.4511 272 22.6807V158.765C272 165.002 269.339 170.343 264.017 174.789C258.695 179.234 252.289 181.453 244.8 181.445H54.4ZM40.0846 170.98C41.9081 169.657 44.0938 168.926 46.3462 168.886L248.349 165.254C254.346 165.146 259.151 160.254 259.151 154.256V31.5686C259.151 25.523 254.272 20.6105 248.227 20.5689L27.9297 19.0539C21.8251 19.0119 16.854 23.9489 16.854 30.0536V97.2955V179.99C16.854 183.256 20.5585 185.146 23.2029 183.227L40.0846 170.98Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Message;