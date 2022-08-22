import React from "react";
import styled from "styled-components";

export const Wrapper = styled.svg(
  ({ $cursor }: { $cursor: string }) => `
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
  cursor: ${$cursor};
`
);

export default (props: Omit<JSX.IntrinsicElements["svg"], "ref">) => (
  <Wrapper
    {...props}
    width={30}
    height={30}
    viewBox="0.694 1.863 499.558 499.558"
    xmlns="http://www.w3.org/2000/svg"
    $cursor={!!props.onClick ? "pointer" : "auto"}
  >
    <circle
      style={{
        fill: "#fff",
      }}
      cx={250.473}
      cy={251.642}
      r={249.779}
    />
    <g>
      <path d="M261.727 42.492c-5.895.24-12.222.785-22.345 1.922-45.732 5.094-80.138 15.2-104.918 30.818-12.158 7.641-22.297 16.851-30.162 27.391-11.95 15.97-19.206 35.176-22.137 58.45-1.538 12.254-1.842 26.734-.865 40.782.128 1.89.208 4.277.192 5.286-.112 4.34 0 9.338.257 11.853 1.874 18.1 9.514 31.251 22.313 38.411 1.57.881 4.565 2.275 4.885 2.275.112 0-.032.24-.304.512-.272.289-.577.69-.673.865-.496.993-.625 12.27-.176 17.684.593 7.256 1.762 13.632 3.572 19.302.609 1.938.72 2.499.817 4.165.144 2.627.817 9.979 1.297 14.175 1.874 16.227 4.87 30.643 8.41 40.51.88 2.467 3.652 9.258 6.119 15.073 8.33 19.51 17.107 35.352 26.622 47.974 14.624 19.446 30.994 31.54 48.87 36.12 8.554 2.179 16.884 2.611 26.83 1.346 17.749-2.227 34.503-7.288 50.297-15.201 33.814-16.931 59.123-45.17 72.45-80.81 2.963-7.978 5.35-16.323 7.16-25.15.576-2.738.833-3.747.993-3.715.112.032.753.256 1.41.512 7.512 2.867 14.672 1.442 21.303-4.245 5.206-4.453 10.396-12.99 14.112-23.178 6.776-18.564 8.858-43.264 4.693-55.262-1.826-5.222-4.853-8.617-8.89-9.963-1.345-.448-2.963-.72-4.26-.737-.465 0-.85-.032-.85-.048 0-.032.561-1.25 1.266-2.69 7.24-15.09 12.654-31.989 14.913-46.581 1.25-8.137 1.602-17.748.88-23.883-.127-1.105-.303-3.3-.4-4.885-.256-4.678-.752-7.48-1.938-11.053-1.794-5.382-5.093-10.524-9.53-14.817-6.744-6.503-11.39-9.979-17.46-13.006l-1.938-.977-.112-1.073c-.16-1.714-.85-5.607-1.474-8.314-2.403-10.38-6.535-20.07-12.334-28.896-4.597-7-9.755-12.799-16.146-18.133-19.846-16.546-47.862-24.267-82.749-22.81zm62.326 48.839c15.153 1.537 25.228 11.613 28.48 28.512.56 2.85 1.17 8.65.93 8.65-.049 0-6.809-7.946-15.026-17.669-8.217-9.706-15.329-18.1-15.81-18.66-.993-1.138-1.089-1.074 1.426-.833zm51.946 47.557c1.618.785 2.98 2.178 4.165 4.229l.449.769-.77-.305c-.432-.176-2.963-1.169-5.638-2.21l-4.853-1.89.769-.4c1.874-.962 4.164-1.042 5.878-.193zm-85.84 13.375c10.828.849 20.775 2.243 31.235 4.357 2.387.497 4.373.929 4.437.993.048.064.176 1.041.272 2.195.705 8.169 1.938 14.24 4.117 20.326.929 2.58 2.29 5.639 4.805 10.86 3.749 7.753 5.11 10.957 6.904 16.227 2.515 7.4 4.293 15.137 5.879 25.468.672 4.39 1.137 8.057 1.04 8.138-.031.016-2.978.464-6.55.96-11.405 1.618-24.828 3.765-36.81 5.863-3.027.545-5.59.977-5.718.977-.112 0-.961-.48-1.874-1.057-3.428-2.194-8.522-4.42-12.863-5.654-12.83-3.604-29.665-3.38-44.37.576-5.99 1.602-9.675 3.204-14.336 6.247l-1.842 1.202 1.282-1.314c5.862-5.99 14.88-9.434 27.23-10.411 2.851-.225 10.62-.225 13.936 0 8.938.592 19.157 2.242 28.16 4.565l2.707.689-.113-.817c-.48-3.508-2.002-6.408-4.74-9.002-6.184-5.863-18.902-8.858-36.025-8.522-5.302.112-9.66.416-14.737 1.01-8.474.976-16.819 2.738-19.558 4.132-.913.448-1.057.592-1.522 1.537-.304.561-.64 1.522-.785 2.115-.304 1.33-.304 4.132-.016 5.654.129.609.193 1.153.177 1.186-.113.112-1.026-.641-1.826-1.522-.978-1.057-2.099-3.3-2.547-5.014-.353-1.345-.385-1.297-.69 1.025-.367 2.771.049 6.071 1.026 8.282 1.217 2.739 3.748 5.221 6.487 6.39l1.026.433-.753.577-.753.577-.433-.305a789.836 789.836 0 0 1-4.02-3.187c-1.986-1.57-3.636-2.852-3.652-2.82-.032.017.064.465.208.978.705 2.402 2.563 4.933 4.645 6.295.577.368 1.041.688 1.041.72 0 .016-.688.625-1.537 1.362-.833.72-2.21 1.97-3.044 2.771l-1.522 1.442-.592-.353c-1.378-.833-4.213-2.114-5.51-2.482-6.584-1.89-13.343-.641-19.863 3.7l-1.57 1.04-1.601-1.072c-1.426-.961-1.794-1.362-1.25-1.362.385 0 2.515-1.474 3.236-2.242.849-.897 1.634-2.435 1.794-3.524l.112-.705-3.252 3.075-3.267 3.06-.56-.337c-.321-.192-.642-.4-.722-.464-.08-.064.305-.577.833-1.137 4.662-4.774 6.007-10.444 3.684-15.458l-.512-1.089-.112 1.041c-.192 1.73-1.041 3.476-2.611 5.35l-.657.801-.096-1.762c-.144-2.755-.993-4.725-2.851-6.631-2.883-2.948-7.977-4.646-17.075-5.703-3.028-.352-10.524-.4-13.135-.096-4.149.497-7.833 1.33-10.7 2.403-.897.352-1.65.609-1.682.592-.032-.032.593-1.12 1.377-2.418 2.259-3.764 5.206-9.13 8.282-15.121 3.796-7.368 5.622-10.46 8.313-14.016 3.636-4.837 7.961-9.05 12.43-12.126 2.499-1.714 5.99-3.652 6.199-3.427.112.112-1.602 3.347-2.707 5.141-3.108 4.982-7.32 9.195-11.293 11.261-1.457.753-2.066 1.362-2.226 2.21-.224 1.25.689 2.627 1.906 2.852.993.192 16.37-3.268 23.466-5.27 19.83-5.623 33.974-14.384 44.626-27.711 2.563-3.204 3.637-4.726 6.984-10.012 1.282-2.018 4.373-5.061 6.728-6.6 6.92-4.58 16.69-7.271 29.553-8.136 3.204-.208 16.595-.064 20.343.224zm-16.739 92.424c6.343.769 11.501 2.066 16.306 4.117 3.556 1.505 8.266 4.453 8.442 5.27.16.752.865 6.647 1.073 8.97.32 3.588.272 14.64-.08 17.731-.769 6.808-2.066 11.806-4.197 16.147-3.203 6.567-7.496 10.251-13.775 11.837-4.39 1.105-10.796 2.162-15.858 2.595-3.684.32-10.636.24-13.535-.16-11.581-1.602-19.83-6.44-25.661-15.09-4.71-6.951-7.609-16.194-8.858-28.127-.304-2.947-.304-3.62 0-4.34.128-.321.24-.77.24-.978 0-.32.513-.88 2.307-2.499 2.226-2.034 5.878-5.061 6.327-5.238.112-.048.384-.256.593-.448.753-.689 4.036-2.803 5.846-3.748 5.927-3.108 15.506-5.43 25.853-6.263 2.803-.225 12.446-.08 14.977.224zm118.293.176c4.741 1.25 7.288 6.471 8.105 16.643.369 4.629.048 12.526-.737 18.725-1.666 13.006-5.814 26.446-10.908 35.288-3.812 6.631-8.33 11.196-12.878 13.022-3.893 1.538-8.442 1.25-12.542-.817-.85-.416-.93-.496-.85-.897.289-1.393 1.09-8.185 1.394-11.821.192-2.227.192-2.259-.176-2.9-.93-1.65-3.044-1.745-4.197-.192-.24.32-.368 1.074-.625 3.685-2.082 21.88-7.336 40.894-16.194 58.61-5.622 11.26-11.597 20.23-19.974 29.953-2.643 3.076-10.348 10.78-13.471 13.455-13.055 11.245-27.487 19.879-43.65 26.094-12.654 4.853-27.262 8.249-40.044 9.322-2.803.224-9.883.096-12.382-.24-7.304-.977-13.584-2.851-19.975-5.943-5.654-2.755-11.356-6.551-16.899-11.245-2.595-2.21-8.874-8.505-11.228-11.26-11.966-14-21.72-30.547-31.62-53.58-3.316-7.705-5.943-14.256-6.968-17.364-2.787-8.345-5.206-19.814-6.871-32.372-.61-4.533-1.186-9.787-1.09-9.867.032-.048.273.192.529.528.785 1.025 2.643 2.915 3.908 3.973 4.053 3.38 8.826 5.382 14.336 6.006 2.451.273 10.14.385 13.744.177 11.565-.641 20.038-3.028 26.814-7.545 4.55-3.027 7.865-6.808 10.348-11.773l.945-1.922-.096 2.082c-.32 6.52-1.458 12.863-3.332 18.661l-.657 2.002.176 1.49c.24 1.842 1.09 4.485 2.035 6.279.416.8.64 1.394.544 1.426-.096.032-.416.272-.72.528a2.398 2.398 0 0 0-.273 3.348c.689.817 1.153.929 3.348.833l1.938-.096 1.506.993c3.62 2.387 7.913 3.828 12.99 4.34 2.243.225 2.836.145 3.572-.496 1.042-.913 1.138-2.386.225-3.428-.561-.64-1.09-.8-3.028-.96-2.595-.209-6.375-1.09-7.849-1.843-.304-.16-.768-.528-1.04-.8-.625-.673-1.923-1.506-2.996-1.939-2.082-.8-4.453-4.389-5.206-7.88l-.256-1.154.592-1.826c4.117-12.702 4.694-31.283 1.538-49.271-.577-3.252-.689-3.7-1.137-4.181-.224-.24-.449-.913-.705-2.098-.192-.946-.336-1.778-.304-1.843.16-.256 3.075-2.114 4.212-2.69 4.79-2.403 9.803-2.74 14.353-.978 1.73.657 3.908 2.003 3.988 2.467.048.192.112 1.105.176 2.034.192 3.556 1.057 9.755 1.842 13.343 2.435 11.02 6.792 19.735 12.959 25.886 6.375 6.359 14.352 9.963 25.084 11.324 3.092.4 11.213.4 14.897 0 6.727-.72 14.849-2.242 18.02-3.38 9.82-3.556 16.146-12.83 18.485-27.102.785-4.757.96-7.48.96-14.064 0-7.032-.24-10.283-1.28-17.732-.097-.705-.08-.753.272-.849 1.538-.352 18.933-3.251 27.855-4.629 6.6-1.025 18.132-2.675 18.197-2.627.256.272 1.345 15.361 1.65 22.842.096 2.707.16 3.14.432 3.508.849 1.121 2.13 1.473 3.236.849.592-.337 1.313-1.298 1.313-1.762 0-.096.24-.48.545-.85.624-.784 2.178-3.139 4.965-7.528a134.63 134.63 0 0 1 3.172-4.837c.977-1.41 1.233-1.682 1.586-1.682.48 0 1.185-.48 3.46-2.339 5.462-4.469 12.141-8.12 16.706-9.098 1.426-.32 4.037-.32 5.206-.016zm-222.602 6.311c3.588.913 6.743 2.243 9.066 3.86 2.227 1.554 2.05 1.554-1.025.033-3.011-1.506-5.606-2.611-8.81-3.78-1.874-.69-1.65-.721.769-.113zm-15.345 1.682c5.542.769 10.716 2.147 16.098 4.26 4.02 1.603 10.892 5.35 13.775 7.513l.817.609.513 2.707c1.281 6.696 1.714 11.245 1.586 16.755-.113 5.046-.577 8.009-1.827 11.901-3.331 10.332-11.66 16.771-24.876 19.238-5.11.945-7.16 1.09-14.976 1.09-6.696 0-7.337-.033-9.115-.353-6.47-1.186-11.148-4.325-14.976-10.044-1.65-2.482-3.669-6.567-3.925-8.009-.064-.352-.256-.865-.416-1.12-.369-.61-1.01-2.628-1.618-5.127-1.057-4.308-1.858-9.883-2.227-15.377-.176-2.835-.224-11.004-.048-12.558l.096-1.01 1.314-.848c4.389-2.835 9.29-5.238 14-6.872 4.58-1.586 8.81-2.483 14.352-3.043 1.57-.16 9.69.048 11.453.288z" />
      <path d="M295.717 232.097c.256.64 4.053 6.904 4.1 6.76.129-.353-.32-2.34-.704-3.188a11.596 11.596 0 0 0-.961-1.65c-.72-.961-2.691-2.515-2.435-1.922zM263.008 256.813c-4.981.576-9.61 2.482-13.855 5.734-2.147 1.634-5.879 5.59-7.352 7.769-.561.833-.545 1.441.048 2.034.528.529 1.185.609 1.746.208.192-.128.8-.833 1.345-1.554 1.922-2.546 5.174-5.654 7.625-7.304 1.073-.72 3.716-2.146 3.812-2.05.032.032-.224.625-.577 1.33-1.473 2.995-1.457 6.279.048 9.354 1.33 2.74 4.149 4.901 7.192 5.51 2.403.497 4.598.192 6.856-.913 1.906-.929 3.668-2.69 4.597-4.597.721-1.458 1.17-3.284 1.17-4.725 0-2.147-.913-4.79-2.243-6.472l-.657-.833.449.113c5.446 1.297 11.228 4.036 16.434 7.768 2.019 1.442 2.42 1.538 3.172.801.897-.913.609-1.666-1.185-2.995-8.987-6.68-19.895-10.172-28.625-9.178zM386.507 254.474c-3.828.993-7.496 2.9-11.18 5.814-1.874 1.474-5.35 5.11-7.064 7.4-3.524 4.662-6.728 10.99-8.97 17.733-.753 2.258-.801 2.835-.289 3.588.77 1.137 1.906 1.537 3.044 1.04.865-.368 1.201-.912 1.938-3.075a96.422 96.422 0 0 1 1.217-3.395l.513-1.33.464.72c.257.385.721.898 1.026 1.138 1.169.881 1.601 2.403 1.585 5.526 0 2.067-.048 2.467-.432 3.62-.785 2.387-2.451 4.357-4.485 5.318-1.09.53-1.602.994-1.858 1.682-.577 1.506.656 3.316 2.258 3.316.289 0 1.073-.256 1.73-.577 5.478-2.61 8.538-8.874 7.689-15.697-.369-2.9-1.073-4.597-2.66-6.311-1.12-1.218-1.104-1.186-1.024-3.444.032-1.266.592-4.165.945-4.966.432-.96 2.53-3.668 4.277-5.51 4.196-4.405 9.53-7.496 14.047-8.105 1.938-.256 2.835-2.483 1.602-3.94-.88-1.042-1.938-1.17-4.373-.545zM221.762 332.305c-3.364.657-7.112 2.643-7.592 4.037-.593 1.682.897 3.492 2.626 3.22.289-.049 1.09-.417 1.795-.833.704-.4 1.81-.93 2.466-1.17 1.073-.4 1.394-.432 3.428-.432 1.922 0 2.307-.048 2.755-.305.753-.464 1.234-1.41 1.121-2.29-.176-1.586-1.313-2.29-3.844-2.387-.977-.032-2.082.032-2.755.16zM273.42 358.03c-13.135 2.74-30.93 5.318-45.41 6.568-21.817 1.874-39.325 1.393-53.02-1.442-2.643-.56-3.044-.513-4.085.497-2.755 2.675-1.49 7.304 3.732 13.823 1.826 2.29 7.016 7.416 9.53 9.419 9.291 7.416 18.822 11.66 29.106 13.022 8.73 1.154 19.333-.4 29.072-4.26 13.792-5.463 27.247-16.547 36.2-29.81 2.1-3.107 2.612-4.693 2.003-6.183-.865-2.066-2.867-2.515-7.128-1.634zm3.316 3.604c-.176.433-2.403 3.684-3.812 5.543-3.14 4.116-7.977 9.242-11.838 12.542-11.533 9.85-24.3 15.457-37.786 16.61-2.803.24-7.897.112-10.268-.256-9.146-1.41-17.876-5.35-25.869-11.693-7.4-5.847-13.439-13.231-13.807-16.867-.096-.817-.08-.881.192-.769.64.24 6.423 1.217 9.53 1.602 17.524 2.194 40.975 1.281 68.237-2.627 7.721-1.121 20.247-3.284 23.467-4.069 1.313-.32 2.066-.32 1.954-.016zM242.585 404.755c-4.148 2.114-9.162 3.54-15.217 4.325-3.091.4-11.837.4-14.896 0-4.02-.513-3.685-.513-4.069-.128-.448.448-.384 1.089.144 1.473.865.625 7.93 1.185 13.055 1.057 6.984-.192 12.478-1.169 17.972-3.155 1.778-.657 5.158-2.259 5.542-2.627.577-.577.096-1.714-.72-1.682-.209 0-1.01.336-1.81.737zM151.411 265.302c-5.238.801-9.723 3.236-14.064 7.577-2.322 2.338-3.444 3.78-3.444 4.453 0 .672.77 1.41 1.474 1.41.448 0 .673-.161 1.57-1.154 1.986-2.243 4.58-4.693 6.007-5.719 1.393-.977 4.196-2.514 4.356-2.37.032.048-.16.4-.432.8a10.052 10.052 0 0 0-1.506 3.685c-.32 1.538-.32 2.675 0 4.245.801 4.004 4.1 7.304 8.105 8.105 2.403.496 4.597.192 6.856-.913 2.74-1.33 4.902-4.149 5.51-7.192.144-.673.257-1.634.257-2.13 0-1.25-.417-3.172-.962-4.358l-.464-1.009.913.465c2.034 1.025 4.741 2.98 7.544 5.414.865.769 1.266 1.009 1.634 1.009.689 0 1.426-.769 1.426-1.474 0-.448-.192-.72-1.394-1.89-4.325-4.197-10.556-7.56-16.034-8.666-1.81-.368-5.862-.528-7.352-.288z" />
    </g>
  </Wrapper>
);
