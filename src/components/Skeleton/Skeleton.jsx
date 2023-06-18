
import ContentLoader from "react-content-loader";


const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={250}
    viewBox="0 0 1200 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#313131"
    {...props}
  >
    {/*<rect x="4" y="57" rx="0" ry="0" width="51" height="51" /> 
    <rect x="63" y="64" rx="0" ry="0" width="59" height="15" /> 
<rect x="63" y="87" rx="0" ry="0" width="59" height="15" /> 
 - 210   */}

    <rect x="0" y="56" rx="0" ry="0" width="51" height="51" /> 
    <rect x="65" y="72" rx="0" ry="0" width="305" height="19" /> 
    <rect x="385" y="72" rx="0" ry="0" width="305" height="19" /> 
    <rect x="705" y="72" rx="0" ry="0" width="305" height="19" /> 
    {/*<rect x="1305" y="0" rx="0" ry="0" width="250" height="150" />*/}
    
  </ContentLoader>
)

export default Skeleton;