// Libraries
import { Stack, Typography } from "@mui/material";

// Layouts
import Intro from './intro';
import About from './about';
import Partners from './partners';
import Services from './services';

// Custom style
const container = {
    padding: '90px 0 0 0',
    overflowY: 'scroll',
    width: '100%',
    height: '100%',
    '&::-webkit-scrollbar': { display: 'none' }
}

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= { container }>
            <Intro />
            <About />
            {/* <Partners />
            <Services /> */}
        </Stack>
    );
}

export default Index;