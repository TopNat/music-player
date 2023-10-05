import Filter from '../Filter';
//import Skeleton from "./../Skeleton/Skeleton";
import s from './PlayListComp.module.scss';
import { titlePlayList } from '../../constants';
import { Search } from '../Search';
import { useGetSelectionMusicQuery } from '../../services/music';
import List from '../List/List';
import { useParams } from 'react-router-dom';

const PlayListComp = (/*{isLoading}*/) => {
    const params = useParams();

    const { data, isLoading: isLoad } = useGetSelectionMusicQuery({
        id: params.id,
    });

    let isEmpty = !isLoad && !data?.id;

    return (
        <div className={`${s.main__centerblock} ${s.centerblock}`}>
            <Search />
            <h2 className={s.centerblock__h2}>
                {titlePlayList[params.id - 1].title}
            </h2>
            <Filter />
            {isLoad ? (
                <p>Loading...</p>
            ) : isEmpty ? (
                <p>No music!</p>
            ) : (
                data && <List data={data.items} />
            )}
        </div>
    );
};

export default PlayListComp;
