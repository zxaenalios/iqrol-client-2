import { AuthPage as AntdAuthPage, type AuthProps } from "@refinedev/antd";
import { Flex } from "antd";
import { Link } from "react-router";
import { FinefoodsLogoIcon, FinefoodsLogoText } from "../../components";
// import logo from "../../../images/iqrol-logo.png"

const authWrapperProps = {
  style: {
    background:
      "radial-gradient(50% 50% at 50% 50%,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%),url('images/login-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
};

const renderAuthContent = (content: React.ReactNode) => {
  return (
    <div
      style={{
        // marginTop: 300,
        maxWidth: 408,
        margin: "auto",
      }}
    >
      <Link to="/">
        <Flex
          align="center"
          justify="center"
          gap={12}
          style={{
            marginBottom: 16,
          }}
        >
          <img src="images/iqrol-logo.png" alt='logo' width="200" height="200"/>
          {/* <FinefoodsLogoIcon
            style={{
              width: 64,
              height: 64,
              color: "#fff",
            }}
          /> */}
          {/* <FinefoodsLogoText
            style={{
              color: "#fff",
              width: "300px",
              height: "auto",
            }}
          /> */}
        </Flex>
      </Link>
      {content}
    </div>
  );
};

export const AuthPage: React.FC<AuthProps> = ({ type, formProps }) => {
  return (
    <AntdAuthPage
      type={type}
      wrapperProps={authWrapperProps}
      renderContent={renderAuthContent}
      formProps={formProps}
    />
  );
};
