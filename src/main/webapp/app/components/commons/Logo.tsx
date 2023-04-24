import React from 'react';
import Typography from "@mui/material/Typography";

export default function Logo(){
    return <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
            // textAlign : 'center',
            flexGrow: 1,
            fontFamily: 'Delicious Handrawn, monospace',
            fontStyle: "italic",
            fontSize: 40,
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            letterSpacing: 1,
        }}
    >
        iSwift
    </Typography>
}