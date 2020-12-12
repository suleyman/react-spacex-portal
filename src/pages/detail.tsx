import { FunctionComponent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LaunchService from "../api/services/launch";
import Loading from "../components/Loading/Loading";
import { ILaunch } from "../interfaces/ILaunch";

type ParamTypes = {
  id: string;
};

const Detail: FunctionComponent = () => {
  const { id } = useParams<ParamTypes>();
  const [detail, setDetail] = useState<ILaunch>({} as ILaunch);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    LaunchService.getOneLaunch(id).then((response) => {
      setDetail(response.data);
      setLoading(false);
    });
  }, [id, detail]);

  return (
    <div className="page-detail">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h1>{detail.name}</h1>
            {renderYoutubeVideo(detail.links.youtube_id)}
            <pre>{JSON.stringify(detail, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

function renderYoutubeVideo(videoId: string) {
  if (videoId) {
    return (
      <iframe
        width="560"
        height="315"
        title="youtube video"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={false}
      ></iframe>
    );
  }
}

export default Detail;
