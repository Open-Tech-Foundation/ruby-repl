import { Box } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useState } from 'react';

import { useDispatch, useSelector } from '../store';

export default function RunBtn() {
  const [loading, setLoading] = useState(false);
  const outputList = useSelector('outputList') || [];
  const dispatch = useDispatch();

  const handleClick = async () => {
    setLoading(true);
    const output = await window.electron.invoke('run-file');
    dispatch({
      type: 'set',
      key: 'outputList',
      payload: [...outputList, output],
    });
    setLoading(false);
  };

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <LoadingButton
        loading={loading}
        variant="contained"
        endIcon={<PlayArrowIcon />}
        onClick={handleClick}
        size="small"
      >
        Run
      </LoadingButton>
    </Box>
  );
}
