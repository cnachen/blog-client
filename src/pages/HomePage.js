import { useParams } from "react-router-dom";
import AppFrame from "./AppFrame";
import Posts from "../components/Posts";

export default function HomePage() {
  const { pageId } = useParams();
  return (
    <AppFrame>
      <Posts pageId={pageId} />
    </AppFrame>
  );
}
