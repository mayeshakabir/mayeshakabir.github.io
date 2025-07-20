import { 
  Container, 
  Typography, 
  Box, 
  Link, 
  Paper,
  IconButton,
  Tooltip
} from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Email, 
  Description,
  Article,
  SportsEsports,
  Code
} from '@mui/icons-material';

function App() {
  return (
    <Container maxWidth={false} sx={{maxWidth: '800px', mx: 'auto', my: 'auto', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={0} sx={{ p: 4, backgroundColor: '#f2f2f2' }} >
        <Box sx={{ textAlign: 'left', mb: 2 }}>
          <Typography variant="h5">
            Mayesha Kabir
          </Typography>
        </Box>
        
        <Box sx={{ textAlign: 'left', mb: 2 }}>
          <Typography variant="caption">
            Hey I'm Mayesha! I'm a Software Engineer currently working @ <Link href="https://www.lattice.com" target="_blank" rel="noopener noreferrer">Lattice</Link>. I graduated from the University of British Columbia, majoring in Computer Science and am always looking for new opportunities in software engineering.
            <br />
            <br />
            My experiences include working as an Software Developer on the Alexa Guard team @ <Link href="https://www.amazon.com/b?ie=UTF8&node=18021383011" target="_blank" rel="noopener noreferrer">Amazon</Link> and I also previously interned @ <Link href="https://hootsuite.com" target="_blank" rel="noopener noreferrer">Hootsuite</Link>, <Link href="https://blackbirdinteractive.com" target="_blank" rel="noopener noreferrer">Blackbird Interactive</Link> & <Link href="https://www.eastsidegames.com" target="_blank" rel="noopener noreferrer">East Side Games</Link>! Links below!
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'left', mb: 2 }}>
          <Tooltip title="Resume">
            <IconButton 
              href="/resume/mayesha-kabir-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1.2rem', color: '#B19CD9' }}
            >
              <Description />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton 
              href="http://www.github.com/mayeshakabir" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#B19CD9' }}
            >
              <GitHub />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton 
              href="https://www.linkedin.com/in/mayeshakabir/" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#B19CD9' }}
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Tooltip title="Medium">
            <IconButton 
              href="https://medium.com/@mayesha.kabir" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#B19CD9' }}
            >
              <Article />
            </IconButton>
          </Tooltip>
          <Tooltip title="Itch.io">
            <IconButton 
              href="https://mayesha.itch.io" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#B19CD9' }}
            >
              <SportsEsports />
            </IconButton>
          </Tooltip>
          <Tooltip title="Devpost">
            <IconButton 
              href="https://devpost.com/mayeshak" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#B19CD9' }}
            >
              <Code />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email">
            <IconButton 
              href="mailto:mayeshakabir@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#B19CD9' }}
            >
              <Email />
            </IconButton>
          </Tooltip>
        </Box>

        {/* <Box sx={{ textAlign: 'center', mb: 3 }}>
          <iframe 
            title="Jewel Thief"
            frameBorder="0" 
            src="https://itch.io/embed/198640?bg_color=f2f2f2&amp;link_color=8080ff&amp;border_color=f2f2f2" 
            width="208" 
            height="167"
          >
            <a href="https://mayesha.itch.io/jewel-thief">Jewel Thief by mayesha's games</a>
          </iframe>
          <iframe 
            title="Pre-Veal"
            frameBorder="0" 
            src="https://itch.io/embed/570447?bg_color=f2f2f2&amp;link_color=8080ff&amp;border_color=f2f2f2" 
            width="208" 
            height="167"
          >
            <a href="https://mayesha.itch.io/pre-veal">Pre-Veal by mayesha's games</a>
          </iframe>
          <iframe 
            title="I Die You Die"
            frameBorder="0" 
            src="https://itch.io/embed/200080?bg_color=f2f2f2&amp;link_color=8080ff&amp;border_color=f2f2f2" 
            width="208" 
            height="167"
          >
            <a href="https://mayesha.itch.io/i-die-you-die">I Die You Die by mayesha's games</a>
          </iframe>
        </Box> */}

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            Mayesha Kabir © 2025
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
