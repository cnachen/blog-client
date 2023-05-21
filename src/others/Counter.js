import {useState} from 'react';
import {Button, Space} from 'antd';

export default function Counter() {
    const [count, setCount] = useState(0);
    const incOnClicked = () => {setCount(count + 1);}
    const decOnClicked = () => {setCount(count - 1);}

    return (
        <div>
            <h1 style={{textAlign: "center", marginBottom: "30px"}}>{count}</h1>
            <div style={{textAlign: "right"}}>
            <Space wrap>
                <Button onClick={decOnClicked}>dec</Button>
                <Button type="primary" onClick={incOnClicked}>inc</Button>
            </Space>
            </div>
        </div>
    );
}