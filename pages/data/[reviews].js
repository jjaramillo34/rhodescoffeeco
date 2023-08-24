//// import sanity client from folder lib
//import client from "lib/client";
//
//// Async function to fetch all reviews
//export const getReviews = async () => {
//  const query = `*[_type == "review"]{
//    title,
//    author,
//    company,
//    description,
//    imageURL,
//    altText
//  }`;
//
//  const reviews = await client.fetch(query);
//  return reviews;
//};
//
//// Get static props
//export const getStaticProps = async () => {
//  const reviews = await getReviews();
//  return {
//    props: {
//      reviews,
//    },
//  };
//};
//
//// Get static paths
//export const getStaticPaths = async () => {
//  const reviews = await getReviews();
//  const paths = reviews.map((review) => ({
//    params: { slug: review.slug },
//  }));
//  return {
//    paths,
//    fallback: false,
//  };
//};
//
//export default function Review({ reviews }) {
//  return (
//    <div>
//      <h1>Reviews</h1>
//      <ul>
//        {reviews.map((review) => (
//          <li key={review.slug}>{review.title}</li>
//        ))}
//      </ul>
//    </div>
//  );
//}

export default function Review() {
  return (
    <div>
      <h1>Reviews</h1>
    </div>
  );
}
