import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { RefObject, useEffect } from "react";
import "./ToastEditorStyle.css";

type Props = {
    editorRef: RefObject<Editor>;
    initialValue?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    isErr?: boolean;
    errMsg?: string;
};

export default function ToastEditorWrapper({ editorRef, placeholder, onChange, isErr = false, errMsg = "", initialValue }: Props) {
    useEffect(() => {
        if (isErr) {
            document.documentElement.querySelector(".toastui-editor-defaultUI")?.classList.add("border-error");
        } else {
            document.documentElement.querySelector(".toastui-editor-defaultUI")?.classList.remove("border-error");
        }
    }, [isErr]);

    useEffect(() => {
        if (editorRef.current && initialValue) {
            const instance = editorRef.current.getInstance();
            instance.setMarkdown(initialValue);
        }
    }, [initialValue, editorRef]);

    return (
        <div>
            <Editor
                ref={editorRef}
                height="600px"
                initialEditType="wysiwyg"
                placeholder={placeholder}
                hideModeSwitch={true}
                toolbarItems={[
                    ["heading", "bold", "italic", "strike"],
                    ["hr", "quote"],
                    ["ul", "ol"],
                    ["table", "link"],
                ]}
                initialValue={initialValue || " "}
                onChange={() => {
                    const instance = editorRef.current?.getInstance();
                    const markdown = instance?.getMarkdown();
                    onChange(markdown);
                }}
            />
            {isErr && <div className="text-red-500 text-xs mt-2">{errMsg}</div>}
        </div>
    );
}
