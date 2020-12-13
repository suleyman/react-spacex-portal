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
  }, [id]);

  const renderYoutubeVideo = () => {
    if (detail?.links?.youtube_id) {
      return (
        <iframe
          width="100%"
          height="500"
          title="youtube video"
          src={`https://www.youtube.com/embed/${detail.links.youtube_id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={false}
        ></iframe>
      );
    }
  };

  return (
    <div className="page-detail">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h1>{detail.name}</h1>
            <h5 className="my-4">{detail.details}</h5>
            {detail?.links?.youtube_id && <section className="video">{renderYoutubeVideo()}</section>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
