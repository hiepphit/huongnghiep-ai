import { useEffect, useState } from "react";

export const useTypewriter = (text) => {
    const [content, setContent] = useState("");
    useEffect(() => {
        if (text) {
            const textArray = text.split(" ");
            let typewrittenText = "";
            textArray.forEach((word, index) => {
                setTimeout(() => {
                    typewrittenText += word + ' |';
                    if(index === textArray.length -1){
                        typewrittenText = typewrittenText.substring(
                        0,
                        typewrittenText.length - 2
                    );
                    }
                    setContent(typewrittenText);
                    typewrittenText = typewrittenText.substring(
                        0,
                        typewrittenText.length - 1
                    );
                }, 100 * index);
            });
        }
    }, [text]);

    return { content };
};
