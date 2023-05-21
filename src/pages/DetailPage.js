import { useParams } from "react-router-dom";
import AppFrame from "./AppFrame";
import Detail from "../components/Detail";

export default function HomePage() {
  const { postId } = useParams();
  return (
    <AppFrame>
      <Detail postId={postId} />
    </AppFrame>
  );
}
