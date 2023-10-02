import PlaylistItem from "../PlaylistItem/PlaylistItem"; 
import { useGetAllMusicQuery } from '../../services/music';

export const Test = () => {
    console.log('test');
    const { data, error, isLoading } = useGetAllMusicQuery();
    const isEmptyList = !isLoading && !data?.length;

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    if (isEmptyList) {
        return <p>No music, yay!</p>;
    }

    console.log(data);

    return (
        <ul>
        {data.map((item) => (
            <PlaylistItem track={item.track} author={item.author} album={item.album} time={item.time} key={item.id} /> 
        
        ))}
        </ul>
    );
};

export default Test;