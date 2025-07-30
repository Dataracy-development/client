import Content from "./Content";
import Feedback from "./Feedback";
import Title from "./Title";

export default function Info() {
    return (
        <div className="flex-1">
            <Title />
            <Content />
            <Feedback />
        </div>
    );
}
