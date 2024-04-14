import { useSelector } from "react-redux";
import { detailData } from "../../app/slices/detailSlice";
import "./DetailPost.css";
import { Card } from "../../common/Card/Card";
import { userData } from "../../app/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const DetailPost = () => {
  const rdxDetail = useSelector(detailData);
  const rdxUser = useSelector(userData);
  const token = rdxUser?.credentials?.token;
  const navigate = useNavigate();

  if (!token) {
    setTimeout(() => {
      navigate("/");
    });
  }
  return (
    <div className="postDetailDesign">
      <Card
        title={rdxDetail?.detail?.title}
        ownerName={rdxDetail?.detail?.ownerName}
        description={rdxDetail?.detail?.description}
        likes={rdxDetail?.detail?.likes.length}
        createdAt={rdxDetail?.detail?.createdAt}
      />
    </div>
  );
};
