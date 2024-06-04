import { useParams } from "react-router-dom"; //this give the page context of the projectid

export default function Project() {
    const params = useParams();
    return (
        <div>
          <h2>Project Page {params.projectId}</h2>
        </div>
    );
};
