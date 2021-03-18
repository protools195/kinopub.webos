import React, { useCallback, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import map from 'lodash/map';
import styled from 'styled-components';

import { WatchingStatus } from '../../api';
import Button from '../../components/button';
import ItemsList from '../../components/itemsList';
import Popup from '../../components/popup';
import SeasonsList from '../../components/seasonsList';
import Text from '../../components/text';
import Bookmarks from '../../containers/bookmarks';
import useApi from '../../hooks/useApi';
import useApiMutation from '../../hooks/useApiMutation';
import FillLayout from '../../layouts/fill';
import { PATHS, RouteParams, generatePath } from '../../routes';

import { getItemTitle } from '../../utils/item';

const Page = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Poster = styled.div<{ src: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src});
  background-size: cover;
`;

const Title = styled(Text)`
  position: absolute;
  padding: 0 1rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 5rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const TrackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 35rem;

  p {
    margin: 0.1rem;
    font-size: 0.8rem;
  }
`;

const SimilarList = styled.div`
  padding: 2rem;
`;

type Props = {};

const ItemView: React.FC<Props> = () => {
  const history = useHistory();
  const { itemId } = useParams<RouteParams>();
  const [visible, setVisible] = useState(false);
  const { data, refetch } = useApi('itemMedia', itemId);
  const { data: similarData } = useApi('itemSmiliar', itemId);
  const { watchingToggleWatchlistAsync } = useApiMutation('watchingToggleWatchlist');

  const video = useMemo(
    () => data?.item.videos?.find(({ watching }) => watching.status !== WatchingStatus.Watched) || data?.item.videos?.[0],
    [data?.item],
  );
  const season = useMemo(
    () => data?.item.seasons?.find(({ watching }) => watching.status !== WatchingStatus.Watched) || data?.item.seasons?.[0],
    [data?.item],
  );
  const episode = useMemo(
    () => season?.episodes.find(({ watching }) => watching.status !== WatchingStatus.Watched) || season?.episodes[0],
    [season],
  );
  const trailer = useMemo(() => data?.item.trailer, [data?.item]);
  const videoToPlay = video || episode;
  const title = useMemo(() => getItemTitle(data?.item, videoToPlay, season), [data?.item, season, videoToPlay]);

  const handleOnPlayClick = useCallback(() => {
    if (videoToPlay?.id) {
      history.push(
        generatePath(PATHS.Video, {
          videoId: videoToPlay.id,
        }),
        {
          item: data?.item,
          video: videoToPlay,
          season,
        },
      );
    }
  }, [history, data?.item, season, videoToPlay]);

  const handleOnTrailerClick = useCallback(() => {
    if (trailer?.id) {
      history.push(
        generatePath(PATHS.Trailer, {
          trailerId: trailer.id,
        }),
        {
          item: data?.item,
          trailer,
        },
      );
    }
  }, [history, data?.item, trailer]);

  const handleOnBookmarksClick = useCallback(() => {
    setVisible(true);
  }, []);

  const handleOnVisibilityClick = useCallback(async () => {
    await watchingToggleWatchlistAsync([itemId]);
    refetch();
  }, [itemId, watchingToggleWatchlistAsync, refetch]);

  return (
    <FillLayout>
      <Page>
        <Poster src={data?.item.posters.wide || data?.item.posters.big} />
        <Title>{title}</Title>
        <Actions>
          <div>
            <Button icon="play_circle_outline" onClick={handleOnPlayClick}>
              Смотреть
            </Button>

            <Button icon="bookmark" onClick={handleOnBookmarksClick}>
              В закладки
            </Button>

            <Popup visible={visible} onVisibilityChange={setVisible}>
              <Bookmarks key={`${itemId}-${visible}`} itemId={itemId} />
            </Popup>

            {typeof data?.item.subscribed === 'boolean' && (
              <Button icon={data?.item.subscribed ? 'visibility_off' : 'visibility'} onClick={handleOnVisibilityClick}>
                {data?.item.subscribed ? 'Не буду смотреть' : 'Буду смотреть'}
              </Button>
            )}
          </div>

          <div>
            {trailer && (
              <Button icon="videocam" onClick={handleOnTrailerClick}>
                Трейлер
              </Button>
            )}
          </div>
        </Actions>
      </Page>
      <Page>
        <SeasonsList item={data?.item} seasons={data?.item.seasons} />

        <Description>
          <Text>{data?.item.plot}</Text>

          {!!data?.item.tracklist?.length && (
            <>
              <Text>Треклист</Text>
              <TrackList>
                {map(data?.item.tracklist, (track, idx) => (
                  <Text key={idx}>
                    {idx + 1}. {track.title}
                  </Text>
                ))}
              </TrackList>
            </>
          )}
        </Description>

        {similarData?.items?.length > 0 && (
          <SimilarList>
            <Text>Похожие</Text>

            <ItemsList items={similarData?.items} />
          </SimilarList>
        )}
      </Page>
    </FillLayout>
  );
};

export default ItemView;