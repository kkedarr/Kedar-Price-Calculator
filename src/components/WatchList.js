import React, { useContext } from 'react';
import { WatchContext } from '../context/WatchContext';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from "../App.module.css";


const WatchList = () => {
  const { watches, deleteWatch } = useContext(WatchContext);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Details copied to clipboard!');
  };

  return (
    <Box>
      <Typography variant="h6">Priced Items</Typography>
      <List>
        {watches.map((watch, index) => (
          <ListItem className={styles.listBox} key={index} secondaryAction={
            <Box classname={styles.actionButtons}>
              <IconButton
                className={styles.copyButton}
                edge="end"
                aria-label="copy"
                onClick={() =>
                  copyToClipboard(
                    `Boxed 📦${watch.chronograph ? '\nChronograph 🧭' : ''}${
                      watch.automaticEngine ? '\nAutomatic Engine ⚙️' : ''
                    }\nPrice: ₦${watch.retailPrice.toLocaleString()}💰\nNationwide delivery(🇳🇬)`
                  )
                }
              >
                <CopyIcon />
              </IconButton>
              <IconButton
                className={styles.deleteButton}
                edge="end"
                aria-label="delete"
                onClick={() => deleteWatch(index)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          }>
            <ListItemText
              primary={
                <Typography variant="body1" component="div"> 
                  <Box fontWeight="fontWeightBold">{watch.brand}</Box> 
                </Typography>
              }
              secondary={
                <Typography variant="body2" component="div"> 
                  <Box whiteSpace="pre-line"> 
                    {`Price: ₦${watch.retailPrice.toLocaleString()}💰\n`}
                    {`${watch.chronograph ? 'Chronograph 🧭\n' : ''}${watch.automaticEngine ? 'Automatic Engine ⚙️\n' : ''}\n`}

                    {'Nationwide delivery(🇳🇬)'}
                  </Box>
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default WatchList;
