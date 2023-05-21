import { useEffect, useState } from "react";

export default function Hitokoto() {
    const [sentence, setSentence] = useState("");
    const [quote, setQuote] = useState("");

    useEffect(() => {
        fetchHitokoto();
    }, []);

    const fetchHitokoto = () => {
        fetch("https://v1.hitokoto.cn?c=a")
        .then((resp) => resp.json())
        .then((data) => {
            setSentence(data.hitokoto);
            setQuote("——" + data.from);
        })
        .catch(err => console.error(err));
    }

    return (
        <h3>
            <div>
                {sentence}
            </div>
            <div style={{textAlign: "right"}}>
                {quote}
            </div>
        </h3>
    );
}