import avatar from "../assets/avatar.png";
import { GithubOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons';
import {Image, Button, Tooltip, Space} from "antd";

export default function AboutMe() {
    return (
        <div style={{textAlign: "center"}}>
            <Image width="75px" preview={false} src={avatar} alt="avatar" style={{borderRadius: "100%"}}/>
            <h2>cnachen</h2>
            <h3>这话是我说的.jpg</h3>
        <Space wrap>
        <Tooltip title="Mail">
        <Button shape="circle" icon={<MailOutlined />} href="mailto:cnachencli@live.cn" target="_blank" />
      </Tooltip>
        <Tooltip title="GitHub">
        <Button shape="circle" icon={<GithubOutlined />} href="https://github.com/cnachen" target="_blank" />
      </Tooltip>
      <Tooltip title="Twitter">
        <Button shape="circle" icon={<TwitterOutlined />} href="https://twitter.com/cnachencli" target="_blank" />
      </Tooltip>
        </Space>
        </div>
    );
}