import styled from "styled-components";

export const Wrapper = styled.svg(
  ({ $cursor }: { $cursor: string }) => `
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
  cursor: ${$cursor};
  
  & path { transition: fill 0.25s }
`
);

export default ({
  color = "red",
  ...props
}: {
  color?: string;
} & Omit<JSX.IntrinsicElements["svg"], "ref" | "style">) => (
  <Wrapper
    {...props}
    width={25}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    $cursor={!!props.onClick ? "pointer" : "auto"}
  >
    <path
      d="M13.4093 12.2471C13.4093 15.6973 10.6314 18.4944 7.20454 18.4944C3.77771 18.4944 1 15.6982 1 12.2471C1 8.79604 3.77792 6 7.20454 6C10.6312 6 13.4093 8.79688 13.4093 12.2471ZM20.216 12.2471C20.216 15.4951 18.8269 18.1278 17.1136 18.1278C15.4003 18.1278 14.0112 15.4942 14.0112 12.2471C14.0112 8.99998 15.4003 6.36639 17.1136 6.36639C18.8269 6.36639 20.216 8.99998 20.216 12.2471ZM23 12.2471C23 15.1571 22.5114 17.516 21.9088 17.516C21.3063 17.516 20.8177 15.1563 20.8177 12.2471C20.8177 9.33792 21.3063 6.97822 21.9091 6.97822C22.5118 6.97822 23 9.33729 23 12.2471Z"
      fill={color}
    />
  </Wrapper>
);
