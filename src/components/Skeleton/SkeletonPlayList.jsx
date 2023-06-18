
import ContentLoader from "react-content-loader";


const SkeletonPlayList = (props) => (
  <ContentLoader 
    speed={2}
    width={250}
    height={150}
    viewBox="0 0 250 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#313131"
    {...props}
  >    
    <rect x="0" y="0" rx="0" ry="0" width="250" height="150" />
  </ContentLoader>
)

export default SkeletonPlayList;