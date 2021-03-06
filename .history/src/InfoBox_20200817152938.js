import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

function InfoBox({title, cases, total}) {
  return (
    <Card>
      <CardContent>
        {/* Title ie. Coronavirus cases */}
        <Typography color="text">
            {title}
        </Typography>

        {/* +120k Number of cases */}

        {/* 1.2M Total */}
      </CardContent>
    </Card>
  );
}

export default InfoBox;
