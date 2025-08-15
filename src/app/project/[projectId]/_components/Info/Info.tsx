import { Project } from "@/types/commonTypes";
import Content from "./Content";
import Continue from "./Continue";
import Feedback from "./Feedback";
import Title from "./Title";

export default function Info({ data }: { data: Project }) {
    return (
        <div className="flex-1">
            <Title domain={data.topicLabel} purpose={data.analysisPurposeLabel} source={data.dataSourceLabel} title={data.title} />
            <Content data={data.content} />
            <Feedback />
            <Continue />
        </div>
    );
}
