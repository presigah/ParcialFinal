import Box from '@mui/material/Box';

const ImageMP = ({ card }) => {
	return (
    <Box sx={{ marginRight: '10px' }}>
      <img src={card?.image} alt={card?.image} style={{ width: '100%', height: 'auto' }} />
    </Box>
	);
}

export default ImageMP;