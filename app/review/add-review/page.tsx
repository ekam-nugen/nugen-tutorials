import AddReviewPage from "@/src/components/addReview";
import Loader from "@/src/components/common/Loader";
import { useEffect, useState } from "react";

export default function ReviewPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AddReviewPage />
      )}
    </>
  );
}