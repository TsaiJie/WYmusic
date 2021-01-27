import React, { memo } from 'react';
import { PlayerRight, PlayerLeft, PlayerWrapper } from './style';
export default memo(function WYPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>WYPlayerInfo</h2>
          <h2>WYSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>WYSimiPlaylist</h2>
          <h2>WYSioimiSong</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
