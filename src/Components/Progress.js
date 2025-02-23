import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// This is the circular Progress indicator that shows how well the user did.
// It is abstracted from Material UI Circular Progress.

const Progress = (props) => {

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress 
                variant="static" 
                value={props.value * 10} 
                size={80}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography 
                    variant="caption" 
                    component="div" 
                    color="textSecondary"
                    style={{fontSize: 25}}
                >
                    {props.value}/10
                </Typography>
            </Box>
        </Box>
    );
}

Progress.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default Progress
