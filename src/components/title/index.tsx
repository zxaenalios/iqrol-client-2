import { useLink } from "@refinedev/core";
import { Space, theme, Typography } from "antd";

const { Text, Link } = Typography;

import { FinefoodsLogoIcon, FinefoodsLogoText } from "../../components";
import { Logo } from "./styled";

type TitleProps = {
  collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { token } = theme.useToken();
  const Link = useLink();

  return (
    <Logo>
      <Link to="/">
        {collapsed ? (
          // <FinefoodsLogoIcon />
          <img src="images/iqrol-logo.png" alt='logo' width="50" height="50"/>
        ) : (
          <Space size={12}>
            <img src="images/iqrol-logo.png" alt='logo' width="50" height="50"/>
            {/* <Text type="warning">IQRO'L</Text> */}
            {/* <FinefoodsLogoIcon
              style={{
                fontSize: "32px",
                color: token.colorTextHeading,
              }}
            /> */}
            {/* <FinefoodsLogoText
              style={{
                color: token.colorTextHeading,
                width: "100%",
                height: "auto",
              }}
            /> */}

          </Space>
        )}
      </Link>
    </Logo>
  );
};
