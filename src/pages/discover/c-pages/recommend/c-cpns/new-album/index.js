import React, { memo } from 'react';
import WYThemeHeaderRCM from '@/components/theme-header-rcm';
import { NewAlbumWrapper } from './style';
export default memo(function WYNewAlbum() {
  return (
    <NewAlbumWrapper>
      <WYThemeHeaderRCM
        title="新碟上架"
      />
    </NewAlbumWrapper>
  );
});
