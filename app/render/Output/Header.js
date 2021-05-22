import { Box, Paper } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from '../store';

export default function Header() {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch({ type: 'set', key: 'outputList', payload: [] });
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        top: '0px',
        width: '100%',
        zIndex: '5',
      }}
    >
      <Paper
        elevation={0}
        square
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'end',
          paddingX: '8px',
        }}
      >
        <IconButton aria-label="delete" size="small" onClick={handleClear}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Paper>
    </Box>
  );
}
